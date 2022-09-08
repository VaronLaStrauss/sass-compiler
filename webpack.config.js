const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const path = require("path");

// Add more files here
// Restart node when saving this file
const entry = {
  styles: "./src/styles.scss",
  sample: "./src/sample.scss",
  "sample-2": "./src/sample-2.scss",
};

module.exports = {
  entry,
  watch: true,
  output: {
    path: path.resolve(__dirname, "dist/css"),
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?[ca]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
