const HtmlWebpackPlugin = require('html-webpack-plugin'),
    InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin'),
    path = require('path'),
    babelCfg = require('./babel.config'),
    p = p => path.join(__dirname, '../', p || '');

module.exports = {
    resolve: {
        alias: {
            app: p('app'),
        },
        extensions: ['.js', '.ts'],
    },

    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                //add here any ES6 based library
                include: /[\\\/](app|cx|cx-react|cx-theme-\w*)[\\\/]/,
                loader: 'babel-loader',
                query: babelCfg,
            },
            {
                test: /\.(png|jpg)/,
                loader: 'file-loader',
            },
        ],
    },
    entry: {
        vendor: ['cx-react'],
        app: [p('app/index.js')],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: p('app/index.html'),
        }),
        new InlineManifestWebpackPlugin(),
    ],
    optimization: {
        runtimeChunk: 'single',
    },
};
