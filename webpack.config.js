
const webpack = require('webpack');

config = {
  context: __dirname + "/src",
  entry: {
    app: ['./js/main.js']
  },
  devtool: 'source-map',
  output: {
    filename: 'assets/js/[name].bundle.js',
    path: __dirname + "/app"
  },
  devServer: {
    contentBase: __dirname + "/app",
    stats: 'errors-only',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      }
    ]
  }
};

module.exports = function(env) {
    if (env === 'production') {
      config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        sourceMap: true
      }));
      //config.plugins.push(new FaviconsWebpackPlugin('./favicon.png'));
      config.devtool = 'source-map';
    }
    console.log(config.plugins);
    return config;
};
