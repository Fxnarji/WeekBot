#! /usr/bin/bash

stopExecution = 0
while [stopExecution -ne 1]
do
  echo "@ Booting Bot"
  node ./index.js

  echo "@ Bot shutdown! Reboot?"
  read -t 3 -n 1 result
  if [ result -ne 0 ]; then
    break
  fi
done

echo "@ Bot shutdown..."