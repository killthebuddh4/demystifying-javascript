#!/bin/sh

docker run -it -v "$(pwd):$(pwd)" -w "$(pwd)" node:17.0.0 node index.js