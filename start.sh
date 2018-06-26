#!/bin/bash

docker rm -f $(docker ps -aq)


echo "" > ./traefik/access.log
rm -rf ./traefik/acme
mkdir ./traefik/acme

cd ./env-demo/
./manage_acme_docker_environment.sh --dev

cd ../chat
docker-compose up -d

cd ../traefik/
docker-compose up -d
