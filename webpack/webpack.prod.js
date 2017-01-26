/**
 * Production config for webpack
 *
 * Use this to add loaders / modules for the production build
 */
const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackBase = require('./webpack.base.js');

const config = require('./config.js');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
	return webpackMerge(webpackBase, {
		resolve: {
			alias: {
				'config': path.resolve(config.src, 'config', 'prod.js')
			}
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(config.src, 'index.html'),
				hash: true,
				minify: {
					collapseWhitespace: true,
					removeComments: true,
					removeRedundantAttributes: true,
					minifyCSS: true,
					minifyJS: false
				}
			}),
			new webpack.optimize.UglifyJsPlugin({
				sourceMap: false,
				compress: {
					warnings: false
				}
			})
		]
	});
}