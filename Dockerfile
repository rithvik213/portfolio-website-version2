# Stage 1: Build the application
FROM node:16-alpine as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# Stage 2: Serve the application with a lightweight server
FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["yarn", "start"]