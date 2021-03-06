# Vue + Webpack 2 Starterkit

*This is a very basic example on how to use Webpack 2 with Vue*

### Quick start
**Make sure you have Node version >= 5.0 and NPM >= 3**

```
# Clone the repo
git clone [https://github.com/woutrbe/webpack-angular2-starterkit](https://github.com/woutrbe/webpack-angular2-starterkit)

# Change working directory
cd webpack-angular2-starterkit

# Install all dependencies
npm install

# Start development server
npm run dev
```

If a browser window doesn't open automaticly, go to [http://localhost:3000](http://localhost:3000)

# Table of contents
* [File structure](#file-structure)
* [Gettings started](#getting-started)
	* [Dependencies](#dependencies)
	* [Installing](#installing)
	* [Development](#development)
	* [Production build](#production-build)
* [License](#license)

## File structure

```
hotel-portal
├──build                * Build folder, generated by webpack
|
├──src                  * All the source files
|   ├──css              * SASS files, these will be compiled during the build process
|   ├──js               * JavaScript source files
|   ├──index.html       * Our index.html page
|   └──index.js         * Bootstrap JavaScript file, mostly used as the root voor webpack
|
├──webpack              * Webpack config files
|   ├──config.js        * General config files, like directories
|   ├──webpack.base.js  * Base webpack config
|   ├──webpack.dev.js   * Development webpack config, includes sourcemaps & dev server
|   └──webpack.prod.js  * Production webpack config, handles minification
|
├──.eslintignore        * Ignores files/directories for ESLint
├──.eslintrc            * ESLint config
├──.gitignore           * Ignores files/directories for git
└──package.json         * List of dependencies and scripts from NPM
```

## Getting started

### Dependencies

### Installing

* `clone` this repo
* `npm install` to install all dependencies

### Development

To create a development server, run:

`npm run dev`

To create a development build, run:

`npm run build:dev`

### Production build

The production build will not generate source maps and minify all files

To create a production build, run:

`npm run build:prod`

### License

This project is available under the [MIT license](http://opensource.org/licenses/MIT).