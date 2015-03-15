#!/bin/bash

ssh root@cersei "cd /app/CerseisBanana && git fetch origin && git checkout origin/master"
ssh root@cersei "cd /app/CerseisBanana && docker-compose build api"
ssh root@cersei "cd /app/CerseisBanana && docker-compose kill api"
ssh root@cersei "cd /app/CerseisBanana && docker-compose up -d --no-deps api"

