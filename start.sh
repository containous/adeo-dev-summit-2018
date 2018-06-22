#!/bin/bash

git stash

docker rm -f $(docker ps -aq)


echo "" > ./traefik/access.log
rm -rf ./traefik/acme
mkdir ./traefik/acme

cd ./env-demo/
./manage_acme_docker_environment.sh --dev