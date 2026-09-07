#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Change to the directory where docker-compose.yml is located.
cd /var/lymdun.moe/ || exit 1

# Renew certificates using Compose v2 and an absolute path for cron.
/usr/bin/docker compose run --rm certbot renew --quiet --no-random-sleep-on-renew

# Reload the Nginx web server to apply renewed certificates.
/usr/bin/docker compose exec -T web nginx -s reload

echo "Certificate renewal script completed successfully at $(date)."
