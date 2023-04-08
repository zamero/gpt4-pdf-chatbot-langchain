# Base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies
RUN npm install && npm cache clean --force && npm install -g pnpm

# Build the production version of the app
RUN pnpm run build

# Expose ports
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Start the app
CMD ["pnpm", "run", "start"]
