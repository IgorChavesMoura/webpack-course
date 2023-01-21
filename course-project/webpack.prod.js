const path = require('path');
const glob = require('glob');
const { merge } = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');

const commonConfig = require('./webpack.common');

const purgePath = {
    src: path.join(__dirname, "src"),

};

module.exports = merge(commonConfig, {
    mode: "production",
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
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {   
                    from: path.resolve(__dirname, "src", "assets", "images", "*"),
                    to: path.resolve(__dirname, "dist"),
                    context: "src",
                }
            ]
        }),
        new MiniCssExtractPlugin(),
        new PurgeCSSPlugin({
            paths: glob.sync(`${purgePath.src}/**/*`, { nodir: true }),
        }),
    ]
});