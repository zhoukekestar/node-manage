#!/bin/bash

echo 'kill current nodejs'
# kill current nodejs
ps -ef | grep "node app.js" | awk '{print $2}' | xargs kill -9
echo 'kill finished'

#set env
PATH=$PATH:/home/zkk/Desktop/node/node/bin

cd ~/Desktop/svn/1
svn update
echo 'svn update ok'
node app.js &
echo 'node ok'
