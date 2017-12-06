import webpack from 'webpack';
import path from 'path';

export default {
    devtool: "inline-source-map",
    debug: true,
    noInfo: false,
    entry: [
        'eventsource-polyfill', // necessary for hot reloading in IE
        'webpack-hot-middleware/client?reload=true',
        './src/index'
    ],
    target: 'web',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
    devServer: {
        contentBase: './src'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
        { test: /(\.css)$/, loaders: ['style', 'css'] },
{ test: /\.eot(\?v=\d+\.\d+\. \d+)?$/, loader: 'file' },
{ test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
{ test: /\.ttf(\?v=\d+\. \d+\. \d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
{ test: /\.svg(\?v=\d+\. \d+\. \d+)?$/, loader: 'url?limit=10000&&mimetype=image/svg+xml' }
    ]
}
};