#!/bin/bash

# Stop the Docker container
echo "Stopping Coinarth React App..."
docker-compose down

# Remove any dangling containers
echo "Cleaning up any dangling containers..."
docker container prune -f --filter "label=com.docker.compose.project=coinarth-react"

echo "Coinarth React App has been stopped and cleaned up."
