#!/bin/bash
set -eo pipefail

sudo docker ps
echo "Login in to docker"
aws ecr get-login-password --region eu-central-1 | sudo docker login --username AWS --password-stdin 690156338378.dkr.ecr.eu-central-1.amazonaws.com/property-web
echo "Fetching latest image"
sudo docker pull 690156338378.dkr.ecr.eu-central-1.amazonaws.com/property-web:latest
set +e
echo "Stopping current container"
sudo docker stop property-web
echo "Removing old container"
sudo docker rm -f property-web
set -e
echo "Starting new container"
sudo docker run -d --name property-web -p 3000:3000/tcp \
  --restart always \
  690156338378.dkr.ecr.eu-central-1.amazonaws.com/property-web:latest

echo "Clear docker trash"
sudo docker container prune -f
sudo docker image prune -f
sudo docker network prune -f
sudo docker volume prune -f