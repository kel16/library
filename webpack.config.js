const path = require('path')

module.exports = {
    entry: ['@babel/polyfill', './client/src/index.js'],
    mode: "development",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'client/public'),
        filename: 'main.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'client/public'),
        compress: true,
        port: 9000,
        historyApiFallback: {
            index: 'client/public/index.html'
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }]
    }
}