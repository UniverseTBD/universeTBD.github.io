# UniverseTBD

Vue Template: [vue-material-kit-master](https://www.creative-tim.com/product/vue-material-kit)

## Project setup
```bash
npm install
```

### Compiles and hot-reloads for development
```bash
npm run dev
```

### Compiles and minifies for production
```bash
npm run build
```

### Check if the production build looks OK in your local environment.
```bash
npm run preview
```

## Typical scenario
```bash
git pull

git branch my-new-branch-name
git checkout my-new-branch-name

# ...
# modify source code
# ...

# make sure everything looks good locally:
npm run dev

# generate `docs/` files and add them to git:
# ./build.sh
npm run build

# add new/modofied/removed files
git add modified-filename.example

# commit changes locally
git commit -m "made some important changes"

# push to github:
git push --set-upstream origin my-new-branch-name
```
This will create a new branch on github, which you can then make a pull request for on github. Once your branch is pulled into `main`, the [universetbd.org](https://universetbd.org) website will be automatically updated within a few minutes.


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).