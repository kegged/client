#!/usr/bin/env sh

PM2=$(which pm2)
NUXT=./node_modules/.bin/nuxt
NAME='client'

PORT=8080 $PM2 start $NUXT -- start --name $NAME

echo 'Started as a service on :8080'
