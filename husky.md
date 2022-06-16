### template
```
npm install husky --save-dev
npx husky install
npm set-script prepare "husky install"
npx husky add .husky/pre-commit "npm run lint:fix"
git add .husky/pre-commit
```
