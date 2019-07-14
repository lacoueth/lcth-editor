git add .
cd projects/lcth-editor
npm version patch
cd ../../

git add .
npm version patch

git add .
git push && git push --tags

npm run package
npm publish dist/lcth-editor/*.tgz