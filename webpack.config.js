var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {


    entry: {
        pages: ['babel-polyfill',__dirname +'/app/index.jsx'],
    },
    output: {
        path: __dirname+'/dist/',
        filename: 'bundle.js',
        publicPath:"/dist/",
    },
    devServer:{
        contentBase:__dirname,
        publicPath:"/dist/",
        hot:true,
        historyApiFallback:true,
        port:8080,
        host:'0.0.0.0',
        disableHostCheck: true
    },
    module: {
        loaders: [
            { test: /\.css$/,exclude:/node_modules/,loader: "style-loader!css-loader?modules&localIdentName=[name]__[local]-[hash:base64:6]"},
            { test: /\.js[x]$/,exclude:/node_modules/,loader: 'babel-loader'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=6400&name=images/[hash:8].[name].[ext]' },
            { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url' }
        ]

    },
    resolve: {
        extensions: ['.','.js', '.jsx'],
        alias:{
            cmPath:path.resolve(__dirname,"app/common"),
            imgPath:path.resolve(__dirname,"app/img"),
            staticPath:path.resolve(__dirname,"static_c"),
            Components:path.resolve(__dirname,"app/components")
        }
    },

    plugins:[

        new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
        new webpack.DefinePlugin({
            "process.env": {
                HOST: JSON.stringify("http://192.168.1.63:8000/")
            }
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html', /*相对于path目录*/
            template: './template/index.html',
            hash: false,
        }),

    ]
};
