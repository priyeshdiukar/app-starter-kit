# Welcome to App Starter Kit!

`app-starter-kit` is an opinionated boilerplate for web development based on ECMAScript 5th Edition.
It helps you kickstart new project with ease , prescribing best practices and tools to help you stay productive.

* [Tools](#tools)
* [Dependencies](#dependencies)
* [Installation](#installation)
* [Upcoming Features](#upcomingfeatures)

## Tools <a name="tools"></a>

App Starter Kit comprises of two tools for improving productivity and satisfaction when building a web app: the build tool ([Gulp](http://gulpjs.com/)) and the package manager ([npm](https://www.npmjs.com/))


## Dependencies <a name="dependencies"></a>

* [gulp-autoprefixer](#gulp-autoprefixer)
* [gulp-concat](#gulp-concat)
* [gulp-cssnano](#gulp-cssnano)
* [gulp-eslint](#gulp-eslint)
* [gulp-notify](#gulp-notify)
* [gulp-sass](#gulp-sass)
* [gulp-scss-lint](#gulp-scss-lint)
* [gulp-uglify](#gulp-uglify)

### gulp-autoprefixer <a name="gulp-autoprefixer"></a>

[`gulp-autoprefixer`](https://www.npmjs.com/package/gulp-autoprefixer) is a CSS post processor. It combs through compiled CSS files to add or remove vendor prefixes like -webkit and -moz after checking the code against [caniuse.com](http://caniuse.com/).

### gulp-concat <a name="gulp-concat"></a>
[`gulp-concat`](https://www.npmjs.com/package/gulp-concat) concatenates files by your operating systems newLine. It will take the base directory from the first file that passes through it.

### gulp-cssnano <a name="gulp-cssnano"></a>
[`gulp-cssnano`](https://www.npmjs.com/package/gulp-cssnano) is a modular minifier, built on top of the [PostCSS](https://github.com/postcss/postcss) ecosystem.

### gulp-eslint <a name="gulp-eslint"></a>
[`gulp-eslint`](https://www.npmjs.com/package/gulp-eslint) is a gulp plugin for processing files with ESLint.

### gulp-notify <a name="gulp-notify"></a>
[`gulp-notify`](https://www.npmjs.com/package/gulp-rename) is a gulp plugin to send messages based on Vinyl Files or Errors to Mac OS X, Linux or Windows using the node-notifier module. Fallbacks to Growl or simply logging.

### gulp-sass <a name="gulp-sass"></a>
[`gulp-sass`](https://www.npmjs.com/package/gulp-sass) is a gulp plugin for [SASS](http://sass-lang.com/).

### gulp-scss-lint <a name="gulp-scss-lint"></a>
[`gulp-scss-lint`](https://www.npmjs.com/package/gulp-scss-lint) is a linter use to validate .scss files. This plugin requires Ruby and [scss-lint](https://github.com/brigade/scss-lint).
`scss-lint` is a tool to help keep your SCSS files clean and readable by running it against a collection of configurable [linter rules](https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md).
You can run it manually from the command line, or integrate it into your SCM hooks.

### gulp-uglify <a name="gulp-uglify"></a>
[`gulp-uglify`](https://www.npmjs.com/package/gulp-uglify) minifies file with [UglifyJS2](https://github.com/mishoo/UglifyJS2)

## Installation <a name="installation"></a>
For gulp-scss-lint to work requires following dependencies on your system.
```bash
sudo apt-get install ruby
sudo gem install scss_lint
```
Then proceed with the following:
```bash
git clone https://github.com/priyeshdiukar/app-starter-kit.git
cd app-starter-kit
npm install
npm run start-dev
```
## Upcoming features <a name="upcomingfeatures"></a>
* custom scss lint config.
* git pre-commit and post-commit hooks.
* unit testing framework integration.
* app-starter-kit2 (A complete rewrite, based on babel and webpack to support ECMAScript 6 development.)
