npm run build
cd docs/.vuepress/dist
git init
git remote add origin https://github.com/hk4114/hk4114.github.io.git
git add .
git commit -m "deploy"
git push -f origin master