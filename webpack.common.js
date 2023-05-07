const path = require("path");

module.exports = {
  entry: {
    lambda: "./pallas_lambda.ts",
  },
  externals: [],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          onlyCompileBundledFiles: true,
        },
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    "@src": path.resolve(__dirname, "src"),
  },
};
