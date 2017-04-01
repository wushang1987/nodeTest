var path = require('path');
var JsDocPlugin = require('jsdoc-webpack-plugin');
console.log(__dirname);

module.exports = {
    entry: './client/app.js',
    output: {
        filename: 'bundle.js',
        // path: path.resolve(__dirname+'\\views\\', 'dist')
        path: path.resolve(__dirname + '\\client\\dist')
            // path: ""
            // }
    },
    plugins: [
        new JsDocPlugin({
            conf: './jsdoc.conf.json'
        })
    ]
};