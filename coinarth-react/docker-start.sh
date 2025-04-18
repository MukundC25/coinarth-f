#!/bin/bash

# Build and start the Docker container
docker-compose up -d

# Display the logs
echo "Starting Coinarth React App in Docker..."
echo "The application will be available at http://localhost:5173"
echo "To view logs, run: docker-compose logs -f"
echo "To stop the application, run: ./docker-stop.sh"
