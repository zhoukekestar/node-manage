#!/bin/bash

echo 'kill current nodejs'
# kill current nodejs
ps -ef | grep "node app.js -startByNodeMange" | awk '{print $2}' | sed -n '1p' | xargs kill -9
echo 'kill finished'


PATH=$PATH:/home/zkk/Desktop/node/node/bin
cd ~/Desktop/svn/1
svn update

echo 'execute node app.js'

node app.js -startByNodeMange &
