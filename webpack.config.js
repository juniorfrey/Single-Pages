const HtmlWebPackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin }    = require('clean-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    mode : 'development',
    optimization:{
        minimizer: [new optimizeCssAssetsPlugin()]
    },
    module: {
        rules: [
            {
                test:  /\.css$/,
                exclude:/style\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test:/style\.css$/,
                use:[
                    miniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test : /\.html$/i,
                loader: 'html-loader',
                options: {
                    // Disables attributes processing
                    sources: false,
                    minimize: false
                  },
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:'./src/index.html',
            filename:'./index.html'
        }),
        new miniCssExtractPlugin({
            //filename:'[name].[contentHash].css',
            filename:'[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets/' },
            ]
        }),
        new CleanWebpackPlugin(),
    ],




}