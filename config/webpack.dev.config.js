const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const OpenBrowserPlugin = require("open-browser-webpack4-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackBaseConfig = require("./webpack.base.config");
const mockMiddleware = require("./mock.config");

const PORT = 8080;
const webpackDevConfig = {
  mode: "development",
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
    new HtmlWebpackPlugin({
      inject: "body",
      title: "React App",
      filename: "index.html",
      template: path.join(__dirname, "../src/index.html"),
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${PORT}/#/`,
    }),
  ],
  devtool: "eval-source-map",
  devServer: {
    proxy: {
      "/": "http://127.0.0.1:3000/mock/11",
    },
    contentBase: path.join(__dirname, "."),
    historyApiFallback: false,
    hot: false,
    host: "0.0.0.0",
    port: PORT,
    // before(app) {
    //   const projectDir = path.resolve();
    //   const mockDir = "./mock";
    //   app.use(mockMiddleware({ projectDir, mockDir }));
    // },
  },
};

module.exports = merge(webpackBaseConfig, webpackDevConfig);
