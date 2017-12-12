var path = require('path');

module.exports = {
    entry: ['./app/index.js'],
    output: {
        // path: './build',
        path: path.join(__dirname, "build/"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 4200,
        contentBase: './build',
        inline: true
    }
}