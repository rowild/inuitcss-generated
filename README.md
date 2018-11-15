Inuitcss 6 - Compiled CSS files
===========

## Version
Version 6.0.0
(The version numbering follows inuitcss.)

## How to use
This repositoy exposes a CSS file (containing all the code inuitcss can potentially generate) using a "Github Page" as source.
Include the file on e.g. codepen like this:

https://rowild.github.io/inuitcss-generated/dist/main.css

If you want to provide your own file from your own repository, please read on at some background info.
Also, read this tutorial on how to prepare a github repo for codepen:
https://fabiofranchino.com/blog/sketching-with-html-css/setup-github-codepen.html

Let me know, if you need any additional explanations, informations, etc.


## About this repository
This repository only has one purpose: to provide all the CSS inuitcss can generate in order to include it in online coding platforms like codpen, jsFiddle, etc.

Inuitcss is a SCSS framework, which, as such, does not provide any production-ready CSS. You are required to do so by yourself (by using a taskmanager like gulp or a module builder like webpack), which is one of the core principles of working with inuitcss and ITCSS in general. But since it is sometimes very useful to quickly test something on codepen or jsFiddle or thelike, a production-ready CSS for importing is most helpful.

This CSS file generates all possible classes, that the vanilla inuitcss framework can produce and these additional plugins:
- `inuit-flexgrid`
- `inuit-displays`

This repo also provides a solution for `restricted utility classes`, which dependeds on `sass-map-get-net-prev`.
Documentation can be found in `utilities/_utilities.restricted-responsive-classes.scss`.

Finally, the gulp task manager groups all media queries using `gulp-group-css-media-queries`.

It is not recommended to use this repo in development! It is intended to be used on codepen, jsFiddle etc. only!

## Requirements
**Node.js** must be pre-installed.

For use with gulp 4, also **gulp-cli** must be pre-installed (globally).

## Setup
Install dependencies
```sh
$ npm install
```

## Deployment
Build the current application with gulp:
```sh
$ gulp serve
```

Build the current application with webpack 4:
```sh
$ npm run build
```

## Note
There is a webpack configuration, too. It is useable, but be aware that it only produces a minified version of inuitcss. For importing somewhere, this might be preferable, anyway, but if you want to study the generated CSS code, use the gulp task.