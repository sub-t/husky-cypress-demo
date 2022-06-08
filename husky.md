### install
```
npm install husky --save-dev
npx husky install
npm set-script prepare "husky install"
```

### config
```
npx husky add .husky/pre-commit "npm run lint:fix"
git add .husky/pre-commit

npx husky add .husky/pre-push "npm run build"
git add .husky/pre-push
```