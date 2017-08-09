var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin'); //抽取CSS文件插件
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        pages:  __dirname +'/app/index.jsx',
        vendor: ['react', 'react-dom', 'react-router']
    },
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js',
        publicPath:"/dist/",
        chunkFilename: '[name].[chunkhash:5].chunk.js'
    },

    module: {
        loaders: [
            /*{
                test: /\.css$/,
                exclude:/node_modules/,
                loader:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?modules&localIdentName=[name]__[local]-[hash:base64:6]",
                    query: {
                        modules: true
                    }
                })
                //loader: "style-loader!css-loader?modules&localIdentName=[name]__[local]-[hash:base64:6]"
            },*/
            /*{
                test: /\.css$/,
                exclude:/node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: {
                        loader: "css-loader?modules&localIdentName=[name]__[local]-[hash:base64:6]",
                        query: {
                            sourceMap: true,
                            modules: true
                        }
                    }
                })
            },*/
            {
                test: /\.css$/,
                loader:  ExtractTextPlugin.extract(
                    {
                        fallbackLoader: 'style-loader',
                        loader: 'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:6]',
                    }
                )
            },
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
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor'],
            minChunks: Infinity,
            filename: 'common.js'
        }),

        new webpack.DefinePlugin({
            "process.env": {
                HOST: JSON.stringify("http://192.168.1.63:8000/")
            }
        }),

        new HtmlWebpackPlugin({
            filename: '../index.html', /*相对于path目录*/
            template: './template/index.html',
            hash: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false // remove all comments
            },
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin({ filename: 'css/[name].css', disable: false, allChunks: true })
    ]
};
