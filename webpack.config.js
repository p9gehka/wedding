const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');

const babelConfig = Object.assign({}, pkg.babel, {
      babelrc: false,
      cacheDirectory: true,
});

const config = {
    entry: './main.js',
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    devtool: "source-map",
    module: {
        loaders: [{
            test: /\.jsx?$/,

            exclude: /node_modules/,
            include: [
                 path.resolve(__dirname, './components'),
                 path.resolve(__dirname, './templates'),
                 path.resolve(__dirname, './main.js'),
                 path.resolve(__dirname, './core'),
               ],
            loader: `babel-loader?${JSON.stringify(babelConfig)}`,
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        }]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ],
};
module.exports = config;