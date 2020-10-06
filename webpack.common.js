const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/views/index.pug",
            favicon: './src/images/favicon.ico',
            inject: true
        }),
    ],
    output: {
        filename: 'app.[contentHash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                  }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        name: "[name].[hash].[ext]"
                    }
                }
            },
            {
                test: /\.pug$/,
                include: path.join(__dirname, 'src'),
                loaders: [ 'pug-loader' ]
            },
        ],
    },
};