const path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { JSDOM } = require('jsdom');

const PATHS = {
	build: path.resolve(__dirname, '../build'),
	src: path.resolve(__dirname, '../src'),
	js: path.resolve(__dirname, '../src/assets/scripts'),
};

module.exports = {
	mode: 'production',
	stats: {
		assets: false,
		colors: true,
		version: false,
		hash: true,
		timings: true,
		chunks: false,
		chunkModules: false,
	},
	entry: [
		'@babel/polyfill',
		path.resolve(__dirname, './entry.js'),
	],
	output: {
		path: path.join(PATHS.build, '../build'),
		filename: '../dist/main.js',
		libraryTarget: 'umd',
	},
	plugins: [
		new CleanWebpackPlugin(
			['build', 'dist'],
			{
				root: path.resolve(__dirname, '..'),
				verbose: true,
			},
		),
		new StaticSiteGeneratorPlugin({
			globals: {
				window: new JSDOM(
					'',
					{
						url: 'http://localhost',
						runScripts: 'dangerously',
						resources: 'usable',
					},
				).window,
			},
			test: 'http://localhost',
		}),
	],
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.jsonp?$/,
				use: 'json-loader',
				exclude: /node_modules/,
			},
			{
				enforce: 'pre',
				test: /\.jsx?$/,
				use: 'eslint-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
				}],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};
