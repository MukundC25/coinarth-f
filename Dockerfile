# Use a specific Node.js version for better consistency
FROM node:18.17.1-alpine3.18

# Set working directory
WORKDIR /app

# Set environment variables
ENV NODE_ENV=development
ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies with exact versions and clean npm cache
RUN npm ci --silent || npm install --silent && \
    npm cache clean --force

# Copy the rest of the application code
COPY . .

# Create a non-root user for better security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /app
USER appuser

# Expose the port the app will run on
EXPOSE 5173

# Command to run the app with specific Vite configuration
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--force"]
