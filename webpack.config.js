const path = require('path');

console.log(path.resolve(__dirname, './client/src/dist'))

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, './client/src/dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}