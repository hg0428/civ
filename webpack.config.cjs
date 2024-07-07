const path = require("path");
const webpack = require("webpack"); // Import webpack

module.exports = {
	entry: "./public/js/index.ts",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "public"),
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(), // Add the HMR plugin
	],
	devServer: {
		compress: true,
		port: 9000,
		hot: false,
		liveReload: true,
	},
	experiments: {
		asyncWebAssembly: true,
	},
};
