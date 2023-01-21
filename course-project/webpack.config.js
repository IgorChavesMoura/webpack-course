const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

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
    devServer: {
        static: "./dist",
        client: {
            overlay: {
                errors: true,
                warnings: false,
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader",
                      options: {
                        // modules: true
                      }  
                    }
                ]
            },
            {
                test: /.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader",
                      options: {
                       // modules: true
                      }  
                    },
                    { loader: "sass-loader" },
                ]
            },
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
        new CopyWebpackPlugin({
            patterns: [
                {   
                    from: path.resolve(__dirname, "src", "assets", "images", "*"),
                    to: path.resolve(__dirname, "dist"),
                    context: "src",
                }
            ]
        }),
        // new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
        }
    }
};