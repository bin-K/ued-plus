#!/usr/bin/env sh

# 忽略错误
# set -e

# 构建
pnpm run docs:build
# 进入待发布的目录
cd docs/.vitepress/dist
git init
git remote add origin git@github.com:bin-K/ued-ui.git
git add -A
git commit -m 'docs(update):更新文档'
# 访问地址：https://bin-k.github.io/ued-ui/
git push -f origin master