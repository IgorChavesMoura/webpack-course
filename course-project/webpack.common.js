const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    stats: {
        warnings:false
    },
    entry: {
        index: './src/index.js',
        courses: './src/pages/courses.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                 test: /.(png|jpg|gif|svg)$/,
                 type: "asset/resource",
            },
            {
                test: /.(ttf|woff|woff2)$/,
                type: "asset/resource",
           }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            mnt: "moment",
            $: "jquery"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            chunks: ["index"],
            inject: true,
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "pages", "courses.html"),
            chunks: ["courses"],
            inject: true,
            filename: "courses.html"
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
        }
    }
};