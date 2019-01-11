const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;

module.exports = {
	mode: 'production',
	devtool: '(none)',
	entry: path.join(__dirname, 'src', 'index.js'),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				loaders: ['file-loader']
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/',
							publicPath: url => `../fonts/${url}`
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['build']),
		new HtmlWebPackPlugin({
			template: path.join(__dirname, 'src', 'index.html')
		}),
		new MiniCssExtractPlugin({
			filename: '[contenthash].css',
			chunkFilename: '[id].css'
		}),
		new WebpackBar(),
		new BundleAnalyzerPlugin()
	],
	output: {
		filename: '[contenthash].bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/'
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	}
};
