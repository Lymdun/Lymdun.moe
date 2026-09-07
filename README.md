# lymdun.moe

A personal links and projects site built with Vue 3 and Vite. The single-page layout features AstolfoBot, Fateful Bullet, and GitHub, X, and email links.

The visual design draws on Arknights: Lone Trail's geometric typography, orbital schematics, cream instrument panels, and rust/mustard/mint registration marks. See [design references and implementation notes](docs/design.md).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

Use Node.js 24 LTS (also used by the Docker build), or Node.js 22.12+.

```sh
npm ci
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Build and Run with Compose

The Dockerfile builds the site with Node and copies `dist` into the final nginx
image. Compose builds that image for `web`; no host `dist` or `node_modules`
directory is needed. The existing nginx configuration and certificate directories
remain mounted from the host.

On an already configured server with certificates in place:

```sh
docker compose up -d --build --no-deps web
```

This rebuilds and recreates only the web service. After the first upgrade, the
obsolete `app` service container can be removed separately if it still exists;
the web service no longer depends on it. Certificate issuance and renewal keep
their existing setup.

### Continuous Integration

GitHub Actions runs on pull requests and pushes to `master`. It checks clean
installs, production builds, and high/critical npm advisories on Node 22.12 and 24.
It also validates Compose and builds the web image.

To repeat the container build locally (Docker required):

```sh
docker compose config --quiet
docker compose --project-name ci build web
```

Pull requests do not deploy the site. CI does not exercise production TLS
certificates, reverse proxies, or browser-side navigation.

### Continuous Deployment

After all CI jobs pass for a push to `master`, Actions builds an image tagged
with the commit SHA and streams it over SSH to the server. The receiver checks
the image revision and nginx configuration, recreates only `web`, and checks
the running image, restart count, and local HTTPS response. Master runs are
serialized without cancelling an active deployment.

The repository uses these GitHub Actions secrets:

- `LYMDUN_MOE_DEPLOY_HOST`: deployment server address.
- `LYMDUN_MOE_DEPLOY_KEY`: dedicated SSH private key.
- `LYMDUN_MOE_DEPLOY_KNOWN_HOSTS`: verified server SSH host key entry.

The key is installed for root with `restrict` and a forced command pointing to
`/usr/local/sbin/lymdun-moe-deploy` (a copy of `scripts/deploy.sh`). It accepts
only `check` and `deploy <40-character commit SHA>`; it provides no interactive
shell or forwarding. The server uses `/var/lymdun.moe` and Compose project
`lymdunmoe`. Its Compose file must match this repository's deployment setup.

CD transfers only the application image. nginx configuration, certificates,
renewal scripts, and the receiver/Compose files are maintained separately on
the server. Updating those files in Git does not install them through CD.
