#!/usr/bin/env sh

# Abort the script when an error occurs
set -e

# install
npm install

# build
npm run build

# cd into dist directory to tidy for deployment
cd dist
cp index.html 404.html
echo "universetbd.org" >> CNAME

cd -
