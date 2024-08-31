# Stage 1: Build the application
FROM node:16-alpine as builder

# Set the working directory to the root of the container
WORKDIR /

# Copy all project files to the root of the container
COPY . .

# Debugging step: Ensure all project files are copied
RUN ls -la /

# Install dependencies and build the application
RUN yarn install
RUN yarn build

# Stage 2: Serve the application with a lightweight server
FROM node:16-alpine

# Set the working directory to the root of the container
WORKDIR /

# Copy necessary build artifacts from the builder stage
COPY --from=builder /.next ./.next
COPY --from=builder /node_modules ./node_modules
COPY --from=builder /public ./public

# Final debugging step: Check the final structure
RUN ls -la /.next
RUN ls -la /node_modules
RUN ls -la /public

# Verify structure
RUN ls -la /

EXPOSE 3000
CMD ["yarn", "start"]
