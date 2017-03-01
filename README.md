# Welcome to App Starter Kit!

`app-starter-kit` is an opinionated boilerplate for web development based on ECMAScript 5th Edition.
It helps you kickstart new project with ease , prescribing best practices and tools to help you stay productive.

* [Tools](#tools)
* [Dependencies](#dependencies)

## Tools

App Starter Kit comprises of two tools for improving productivity and satisfaction when building a web app: the build tool ([Gulp](http://gulpjs.com/)) and the package manager ([npm](https://www.npmjs.com/))


## Dependencies

* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
* [gulp-concat](https://www.npmjs.com/package/gulp-concat)
* [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano)
* [gulp-eslint](https://www.npmjs.com/package/gulp-eslint)
* [gulp-notify](https://www.npmjs.com/package/gulp-rename)
* [gulp-sass](https://www.npmjs.com/package/gulp-sass)
* [gulp-scss-lint](https://www.npmjs.com/package/gulp-scss-lint)
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)

### gulp-autoprefixer

`gulp-autoprefixer` is a CSS post processor. It combs through compiled CSS files to add or remove vendor prefixes like -webkit and -moz after checking the code against [caniuse.com](http://caniuse.com/).

### gulp-concat
[`gulp-autoprefixer`](https://www.npmjs.com/package/gulp-autoprefixer) concatenates files by your operating systems newLine. It will take the base directory from the first file that passes through it.

### gulp-cssnano
[`gulp-cssnano`](https://www.npmjs.com/package/gulp-cssnano) is a modular minifier, built on top of the [PostCSS](https://github.com/postcss/postcss) ecosystem.

### gulp-eslint
[`gulp-eslint`](https://www.npmjs.com/package/gulp-eslint) is a gulp plugin for processing files with ESLint.

### gulp-notify
[`gulp-notify`](https://www.npmjs.com/package/gulp-rename) is a gulp plugin to send messages based on Vinyl Files or Errors to Mac OS X, Linux or Windows using the node-notifier module. Fallbacks to Growl or simply logging.

### gulp-sass
[`gulp-sass`](https://www.npmjs.com/package/gulp-sass) is a gulp plugin for [SASS](http://sass-lang.com/).

### gulp-scss-lint
[`gulp-scss-lint`](https://www.npmjs.com/package/gulp-scss-lint) is a linter use to validate .scss files. This plugin requires Ruby and [scss-lint](https://github.com/brigade/scss-lint).
`scss-lint` is a tool to help keep your SCSS files clean and readable by running it against a collection of configurable [linter rules](https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md).
You can run it manually from the command line, or integrate it into your SCM hooks.

### gulp-uglify
[`gulp-uglify`](https://www.npmjs.com/package/gulp-uglify) minifies file with [UglifyJS2](https://github.com/mishoo/UglifyJS2)

## Installation
For gulp-scss-lint to work requires following dependencies on your system.
```bash
sudo apt-get install ruby
gem install scss_lint
```
```bash
npm install
npm run gulp
```
