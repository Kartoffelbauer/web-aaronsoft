# ==============================================================================
# Stage 1: Build Environment (Node.js)
# ==============================================================================
# Use a lightweight Alpine-based Node image for the build step
FROM node:24-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package manifests first to leverage Docker layer caching
# This prevents re-installing dependencies if only source code changes
COPY package*.json ./

# Install dependencies using `npm ci` for a clean, deterministic install
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Execute the Astro build script (runs 'astro build' as defined in package.json)
# This generates the highly-optimized static HTML/CSS in the /app/dist directory
RUN npm run build

# ==============================================================================
# Stage 2: Production Server (Nginx)
# ==============================================================================
# Use the official Nginx unprivileged Alpine image for enhanced security
FROM nginxinc/nginx-unprivileged:alpine AS production

# Temporarily switch to root to remove default Nginx startup scripts
# This ensures our configuration is fully baked in and immutable
USER root
RUN rm /docker-entrypoint.d/*.sh

# Switch back to the unprivileged nginx user (UID 101 in this specific image)
USER 101

# Copy the compiled static assets from the 'builder' stage into Nginx's serving directory
# We ensure the nginx user owns these files
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html/

# Copy custom Nginx configuration and security headers
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./nginx/security-headers.conf /etc/nginx/conf.d/security-headers.conf

# Expose port 8080 (the unprivileged Nginx default)
EXPOSE 8080

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]