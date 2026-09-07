#!/bin/bash
set -euo pipefail

# Installed on the server as the forced command for the dedicated CD SSH key.
case "${SSH_ORIGINAL_COMMAND:-}" in
    check) mode=check ;;
    *)
        if [[ ${SSH_ORIGINAL_COMMAND:-} =~ ^deploy\ ([0-9a-f]{40})$ ]]; then
            mode=deploy
            revision=${BASH_REMATCH[1]}
        else
            echo 'Only check or deploy <commit SHA> is allowed.' >&2
            exit 64
        fi
        ;;
esac

cd /var/lymdun.moe
compose=(/usr/bin/docker compose --project-name lymdunmoe)
"${compose[@]}" config --quiet

if [[ $mode == check ]]; then
    test -r nginx/conf/app.conf
    test -r certbot/conf/live/lymdun.moe/fullchain.pem
    test -r certbot/conf/live/lymdun.moe/privkey.pem
    test -n "$("${compose[@]}" ps --quiet web)"
    echo 'Deployment prerequisites ready.'
    exit 0
fi

exec 9>/var/lock/lymdun-moe-deploy.lock
flock --wait 300 9

/usr/bin/docker load
export LYMDUN_MOE_IMAGE="lymdun-moe-cd:$revision"
test "$(/usr/bin/docker image inspect "$LYMDUN_MOE_IMAGE" --format '{{index .Config.Labels "org.opencontainers.image.revision"}}')" = "$revision"

# Validate nginx with the real read-only config/certificate mounts before restart.
"${compose[@]}" run --rm --no-deps -T web nginx -t
/usr/bin/docker tag "$LYMDUN_MOE_IMAGE" lymdun-moe:latest
"${compose[@]}" up --detach --no-deps --no-build --pull never web

container=$("${compose[@]}" ps --quiet web)
test -n "$container"
expected=$(/usr/bin/docker image inspect "$LYMDUN_MOE_IMAGE" --format '{{.Id}}')
test "$(/usr/bin/docker inspect "$container" --format '{{.Image}}')" = "$expected"

curl --fail --silent --show-error --retry 15 --retry-connrefused --retry-delay 2 \
    --connect-timeout 5 --max-time 10 --resolve lymdun.moe:443:127.0.0.1 \
    https://lymdun.moe/ | grep -q 'id="app"'
test "$(/usr/bin/docker inspect "$container" --format '{{.State.Running}} {{.RestartCount}}')" = 'true 0'
echo "Deployed $revision successfully."
