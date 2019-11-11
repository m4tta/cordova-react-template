const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "www/js"),
    filename: "index.bundle.js"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      { // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			}
    ]
  },
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
	},
};
