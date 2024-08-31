# Stage 1: Build the application
FROM node:16-alpine as builder
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
WORKDIR /app

# Copy everything from the builder stage
COPY --from=builder /app /app

# Final debugging step: Check the final structure
RUN ls -la /app

EXPOSE 3000
CMD ["npm", "start"]
