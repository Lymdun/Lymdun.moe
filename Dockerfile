FROM node:24 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:latest AS runtime
COPY --from=build /app/dist /usr/share/nginx/html
