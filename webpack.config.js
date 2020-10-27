const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

const PORT = 3000;

module.exports = (env = {}, argv) => {
  const webpackMode = argv.mode;
  const { analyze } = env;
  const buildTarget = env ? env.buildTarget : undefined;

  const plugins = [
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ];

  if (analyze) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return {
    entry: ['core-js/stable', './src/index'],
    mode: webpackMode,
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: PORT,
      historyApiFallback: true,
    },
    output: {
      publicPath: buildTarget ? '/chat/' : `http://localhost:${PORT}/`,
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.min.js',
      libraryTarget: 'umd',
      ecmaVersion: 5,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      modules: [path.resolve(__dirname, './src'), path.resolve(__dirname, './node_modules')],
      alias: {
        '@src': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@assets': path.resolve(__dirname, './assets'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@store': path.resolve(__dirname, 'src/store'),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'babel-loader',
          },
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                localsConvention: 'camelCase',
                modules: {
                  localIdentName: '[name]__[local]__[hash:base64:5]',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [require('autoprefixer')()],
              },
            },
            { loader: 'sass-loader' },
          ],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(jpeg|jpg|png|docx)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                esModule: false,
              },
            },
          ],
        },
        { test: /\.(woff|woff2|eot|ttf)$/, use: ['url-loader?limit=100000'] },
      ],
    },
    plugins: plugins,
  };
};
