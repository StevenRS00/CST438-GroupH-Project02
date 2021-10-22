const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: {
          loader: "style-loader!css-loader",
        }
      }
    ],
  },
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};