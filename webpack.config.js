const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
    analytics: "./src/analytics.js",
  },
  output: {
    // filename: "[name].bundle.js",
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HTMLWebpackPlugin({
      // title: "Webpack-Plugin-Title",
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
