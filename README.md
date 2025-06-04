# 1SrGhost.github.io – Portfolio Website

This repository contains the source code for my personal portfolio available at [1srghost.github.io](https://1srghost.github.io/). The site showcases my work and experience as a Frontend Developer.

## CSS & JS Setup

The CSS and JavaScript used on the site are provided in two forms:

- `css/styles.css` and `js/scripts.js` are the minified files served by the site.
- `css/styles.src.css` and `js/scripts.src.js` contain the same code in a human-readable format.

To rebuild the minified versions, run:

```bash
npx clean-css-cli -o css/styles.css css/styles.src.css
npx terser js/scripts.src.js -o js/scripts.js -c -m

