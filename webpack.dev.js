const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
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
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
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
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		compress: true,
		port: 9000,
		historyApiFallback: true
	}
};
