#!/usr/bin/env sh

# Abort this script when an error occurs
set -e

# install
npm install

# build
npm run build

# cd into docs directory to tidy for deployment
cd docs
cp index.html 404.html
echo "universetbd.org" > CNAME
