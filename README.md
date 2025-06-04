# 1SrGhost.github.io

This repository contains the code for my personal website.

The CSS and JavaScript used on the site are provided in two forms:

- `css/styles.css` and `js/scripts.js` are the minified files served by the site.
- `css/styles.src.css` and `js/scripts.src.js` contain the same code in a human-readable format.

If you edit the source files and need to rebuild the minified versions, run:

```bash
npx clean-css-cli -o css/styles.css css/styles.src.css
npx terser js/scripts.src.js -o js/scripts.js -c -m
```

