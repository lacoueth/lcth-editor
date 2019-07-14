git add .
cd projects/lcth-editor
npm version patch
cd ../../

git add . && git commit
npm version patch

git push && git push --tags

npm run package
npm publish dist/lcth-editor/*.tgz