const HTMLWebpack = require('html-webpack-plugin');
const CSSExtract = require('mini-css-extract-plugin');
const CopyWebpack = require('copy-webpack-plugin');

const CSSMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',

    output: {
        clean: true,
        filename: 'main.[contenthash].js'
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [CSSExtract.loader, 'css-loader']

            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new CSSMinimizer(),
            new Terser()
        ]
    },

    plugins: [
        new HTMLWebpack({
            title: 'Webpack App',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new CSSExtract({
            filename: '[name].[hash].css',
            ignoreOrder: false
        }),
        new CopyWebpack({
            patterns: [{
                from: 'src/assets/',
                to: 'assets/'
            }
            ]
        })
    ]
}