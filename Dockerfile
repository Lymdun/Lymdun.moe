FROM node:21 as build
WORKDIR /app
COPY . .
RUN npm install && npm run build
