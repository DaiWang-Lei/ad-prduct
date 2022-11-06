const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackProdConfig = {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin({
      protectWebpackAssets: true,
    }),
    new MiniCssExtractPlugin ({
      filename:'[name].[fullhash:4].css',
    }),
    new HtmlWebpackPlugin({
      inject: "body",
      title: "React Prod",
      filename: "index.html",
      template: path.join(__dirname, "../src/index.html"),
    }),
  ],
};

module.exports = merge(webpackBaseConfig, webpackProdConfig);
