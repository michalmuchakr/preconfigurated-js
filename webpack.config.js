const path = require('path');

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
}