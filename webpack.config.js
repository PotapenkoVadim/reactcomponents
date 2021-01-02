const path = require ('path');
const HTMLWebpackPlugin = require ('html-webpack-plugin');
const {CleanWebpackPlugin} = require ('clean-webpack-plugin');

module.exports = {
	entry: { main: ['@babel/polyfill', './src/index.js'] },
	output: {
		filename: '[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		// library: 'APP'  -- внешний доступ к сборке (в index export)
	},
	resolve: {
		// alias: {
		// 	'@root': path.resolve(__dirname, 'src'),
		// 	'@components': path.resolve(__dirname, 'src/components'),
		// }
	},
	devServer: { port: 4200 },
	plugins: [
		new HTMLWebpackPlugin({ template: './src/index.html' }),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['@babel/plugin-proposal-class-properties']
					}
				}
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
						plugins: ['@babel/plugin-proposal-class-properties']
					}
				}
			}
		]
	}
};