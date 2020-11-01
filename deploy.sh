rm -rf dist
yarn build
cd dist
git init
git add .
git commit -m "update"
git branch -M main
git remote add origin git@github.com:linzhengGithub/Sprite-UI-website.git
git push -f -u origin main
cd ..
echo https://linzheng99.top/Sprite-UI-website/index.html