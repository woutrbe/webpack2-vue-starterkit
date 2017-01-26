/**
 * Base config for webpack
 */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const config = require('./config.js');

module.exports = {
    context: config.src,
    entry: {
        'js/bundle.js': './index.js',
		vendor: ['vue']
    },
    output: {
		path: path.resolve(config.dist),
        filename: '[name]',
        publicPath: '/'
    },
	resolve: {
		extensions: ['.js', '.scss'],
		modules: [path.resolve('./src/js'), path.resolve('node_modules')],
		alias: {
			'vue$': 'vue/dist/vue.common'
		}
	},
    plugins: [
		new CleanWebpackPlugin([config.dist], {
			root: process.cwd(),
			verbose: true,
			dry: false
		}),
		new ExtractTextWebpackPlugin({
			filename: 'css/bundle.css',
			allChunks: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'js/vendor.js'
		})
    ],
    module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'eslint-loader'
					},
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015']
						}
					}
				]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextWebpackPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: 'css-loader!sass-loader'
				})
			}
		]
    }
}