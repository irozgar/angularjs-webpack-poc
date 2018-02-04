const path = require('path');

const config ={
    entry: {
        app: path.join(__dirname, 'src/app')
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    devtool: "#inline-source-map",
    devServer: {
      port: 3000,
      contentBase: path.join(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.css$/,
                loader: 'style!css',
            }
        ]
    },
};

module.exports = config;
