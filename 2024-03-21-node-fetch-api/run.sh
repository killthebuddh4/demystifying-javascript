#!/bin/sh

docker run -it -v "$(pwd):$(pwd)" -w "$(pwd)" node:18.0.0 node index.js