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
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: 'bundle.js'
  }
}