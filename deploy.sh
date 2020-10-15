npm run build
cd docs/.vuepress/dist
git init
git add .
git commit -m "deploy"
git push -f
git push -f origin master