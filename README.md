# tbd

## Project setup
```bash
npm install
```

### Compiles and hot-reloads for development
```bash
npm run serve
```

### Compiles and minifies for production
```bash
./build.sh
```

### Lints and fixes files
```bash
npm run lint
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
npm run serve

# generate `docs/` files and add them to git:
./build.sh

# push to github:
git push --set-upstream origin my-new-branch-name
```
This will create a new branch on github, which you can then make a pull request for on github. Once your branch is pulled into `main`, the [universetbd.org](https://universetbd.org) website will be automatically updated within a few minutes.


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
