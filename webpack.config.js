const path = require('path');

module.exports = {
  entry: "./client/index.jsx",
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: [path.resolve(__dirname, "/node_modules")],
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: 'bundle.js'
  }
}