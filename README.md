# lymdun.moe

This template should help get you started developing with Vue 3 in Vite.

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

CI does not deploy the site or exercise production TLS certificates, reverse
proxies, or browser-side navigation.
