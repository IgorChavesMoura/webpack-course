const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig,{
    mode: "development",
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
                    "style-loader",
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
                    "style-loader",
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
        new BundleAnalyzerPlugin(),
    ]
});