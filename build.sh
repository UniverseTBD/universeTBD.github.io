#!/usr/bin/env sh

# Abort the script when an error occurs
set -e

# install
npm install

# build
npm run build
mv dist docs

# cd into docs directory to tidy for deployment
cd docs
cp index.html 404.html
echo "universetbd.org" >> CNAME
git add ./*

cd -
