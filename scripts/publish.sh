cd projects/lcth-editor
npm version patch
cd ../../

git add . && git commit -m "new version"
npm version patch

git add .
git push && git push --tags

npm run package
npm publish dist/lcth-editor/*.tgz