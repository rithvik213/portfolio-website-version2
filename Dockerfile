# Stage 1: Build the application
FROM node:16-alpine as builder
WORKDIR /app

# Copy the package files and list contents of /app
COPY package.json yarn.lock ./
RUN ls -la /app    # Debugging step: Check that package.json and yarn.lock are copied correctly

# Install dependencies and list contents of node_modules
RUN yarn install
RUN ls -la /app/node_modules  # Debugging step: Verify that node_modules are installed correctly

# Copy all project files and list contents of /app
COPY . .
RUN ls -la /app    # Debugging step: Ensure all project files are copied

# Build the application
RUN yarn build

# Stage 2: Serve the application with a lightweight server
FROM node:16-alpine
WORKDIR /app

# Copy necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

# Final debugging step: Check the final structure
RUN ls -la /app/.next
RUN ls -la /app/node_modules
RUN ls -la /app/public

EXPOSE 3000
CMD ["yarn", "start"]
