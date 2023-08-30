#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下
cd dist
cp index.html 404.html

git init
git add -A
git commit -m 'deploy'
git branch -m gh-pages

# 部署到 https://<USERNAME>.github.io
git push -f git@github.com:universeTBD/universeTBD.github.io.git gh-pages:gh-pages

cd -
