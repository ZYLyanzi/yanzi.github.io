//webpack.config.js
var path = require('path');
var SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {
    // ...
    module: {
        loaders: [
            {test: /\.styl$/, loaders: [
                'style-loader',
                'css-loader',
                'stylus-loader'
            ]},
            {test: /\.png$/, loaders: [
                'file-loader?name=i/[hash].[ext]'
            ]}
        ]
    },
    resolve: {
        //webpack 1:
        modulesDirectories: ["node_modules", "spritesmith-generated"],
        //webpack 2:
        modules: ["node_modules", "spritesmith-generated"]
    },
    plugins: [
        new SpritesmithPlugin({
          src: {
            cwd: path.resolve(__dirname,'../static/icons'),
            glob:'*.png'
          },
          target: {
            image: [path.resolve(__dirname, '../dist/static/images/icons.png'),path.resolve(__dirname, '../static/images/icons.png')],
            css: [path.resolve(__dirname, '../dist/static/css/icons.css'), path.resolve(__dirname, '../static/css/sprite.css')]
          },
          apiOptions: {
            cssImageRef: '../images/icons.png'
          },
          spritesmithOptions: {
            algorithm: 'top-down'
          }
        }),
    ]
    // ...
};
