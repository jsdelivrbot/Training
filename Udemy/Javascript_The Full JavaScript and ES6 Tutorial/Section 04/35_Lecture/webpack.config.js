var path = require('path');

module.exports = {
    entry: ['./app/index.js'],
    output: {
        // path: './build/',
        path: path.join(__dirname, "build/"),
        filename: 'bundle.js'
    }
}