const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/main.tsx',
  module: {
    rules: [
      {
        // Only run `.ts` and `.tsx` files through TSC
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        // Skip any files outside of your project's `src` directory
        // include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', // , run first
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Creates `style` nodes from JS strings
          // 'style-loader',
          // Translates CSS into CommonJS, Turn CSS into JS
          'css-loader',
          // Compiles Sass to CSS, Run first
          'sass-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        // chunk with name vendor
        vendor: {
          // sync + async chunks
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
        },
        // styles: {
        //   name: 'styles',
        //   test: /\.css$/,
        //   chunks: 'all',
        //   enforce: true
        // },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'async',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.tsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      formatter: 'table',
    }),
    new HtmlWebpackPlugin({ inject: true, template: './src/index.html' }),
    new MiniCssExtractPlugin(),
  ],
};
