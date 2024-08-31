# Stage 1: Build the application
FROM node:16-alpine as builder

# Set the working directory to /app
WORKDIR /app

# Copy all project files to /app
COPY . .

# Debugging step: Ensure all project files are copied
RUN ls -la /app

# Install dependencies and build the application
RUN npm install
RUN npm run build

# Stage 2: Serve the application with a lightweight server
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy necessary build artifacts from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

# Final debugging step: Check the final structure
RUN ls -la /app/.next
RUN ls -la /app/node_modules
RUN ls -la /app/public

# Verify structure
RUN ls -la /app

EXPOSE 3000
CMD ["npm", "start"]
