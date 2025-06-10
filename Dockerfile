# Build stage
FROM node:24.2.0-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html/christopherjones-co

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]