# Development stage
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port
EXPOSE 3000

# Add this line before CMD
ENV NODE_OPTIONS='--openssl-legacy-provider'

# Start the app
CMD ["npm", "start"]