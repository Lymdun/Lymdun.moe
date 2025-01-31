FROM node:22 as build
WORKDIR /app
COPY . .
RUN npm install && npm run build
