var path = require('path');
var JsDocPlugin = require('jsdoc-webpack-plugin');
module.exports = {
    entry: [
        './client/app.js'
    ],
    module: {
        loaders: [
            // the url-loader uses DataUrls.
            // the file-loader emits files.
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
        ]
    },
    devtool :"source-map",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname + '\\client\\dist')
    },
    devServer: {
        port: 9000,
        publicPath: "/dist/",
        filename: "bundle.js",
        contentBase: path.join(__dirname, 'client'),
        compress: true
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        ignored: "/node_modules/",
        poll: 1000
    },
    plugins: [
        // new JsDocPlugin({
        //     conf: './jsdoc.conf.json'
        // })
    ]
};