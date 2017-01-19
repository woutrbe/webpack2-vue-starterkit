const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const dist = path.resolve(__dirname, 'build');
const baseFolder = __dirname;

const isProd = (process.env.NODE_ENV || 'development') === 'production';

const plugins = [
    new CleanWebpackPlugin(['build'], {
        root: process.cwd(),
        verbose: true, 
        dry: false
    }),
    new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(baseFolder, 'src/index.html'),
        favicon: ''
    }),
    new ExtractTextPlugin('bundle.css')
]

if(isProd) {
    // Add your production plugins here
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            output: {
                comments: false
            },
            compress: {
				warnings: true
			}
        })
    )
} else {
    // Add your development plugins here
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: dist,
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.scss'],
        modules: [path.resolve(__dirname, 'node_modules')],
        alias: {
            'vue$': 'vue/dist/vue.common'
        }
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader!sass-loader'
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: dist,
        historyApiFallback: true,
        port: 3000
    }
}