# Build ENV, example of multistage build
FROM node:latest as build
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn run build

# Production ENV
FROM nginx:1.17.3-alpine
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]