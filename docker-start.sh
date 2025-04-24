#!/bin/bash

# Stop any existing containers first
echo "Stopping any existing containers..."
docker-compose down

# Remove any existing node_modules volume to ensure clean start
echo "Cleaning up volumes..."
docker volume rm coinarth-react_node_modules 2>/dev/null || true

# Rebuild and start the Docker container
echo "Building and starting the Docker container..."
docker-compose build --no-cache
docker-compose up -d

# Display the logs
echo "Starting Coinarth React App in Docker..."
echo "The application will be available at http://localhost:5173"
echo "To view logs, run: docker-compose logs -f"
echo "To stop the application, run: ./docker-stop.sh"

# Show logs for initial startup
echo "Showing initial logs (press Ctrl+C to exit logs but keep container running):"
docker-compose logs -f
