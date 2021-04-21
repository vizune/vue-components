const colors = require('colors');
const path = require('path');
const config = require('config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const srcPath = config.get('srcPath');
const buildPath = config.get('buildPath');
const vuePath = config.get('vuePath');
const scriptsSrc = path.join(srcPath, '/assets/scripts');
const stylesSrc = path.join(srcPath, '/assets/css');

const devMode = process.env.NODE_ENV !== 'production';

console.log('NODE ENV: ', colors.green.bold(process.env.NODE_ENV));

module.exports = {
  entry: {
    site: [
      path.join(scriptsSrc, "/script.js"),
      path.join(stylesSrc, "/site.scss")
    ],
    vendor: path.join(scriptsSrc, "/vendor.js"),
    app: path.join(scriptsSrc, "/app.js"),
    rte: [
      path.join(stylesSrc, "/rte.scss")
    ],
  },

  output: {
    //filename: devMode ? 'assets/scripts/[name].[contenthash].js' : 'assets/scripts/[name].[contenthash].min.js',
    //filename: devMode ? 'assets/scripts/[name].js' : 'assets/scripts/[name].min.js',
    filename: 'assets/scripts/[name].min.js',
    path: buildPath,
    publicPath: '/',
  },

  resolve: {
    extensions: [
      '.js', '.json', '.scss', '.css', '.hbs', '.handlebars', '.html', '.htm', '.woff', '.otf', '.gif', '.png', '.jpg', '.jpeg', '.svg'],
    modules: ['node_modules', scriptsSrc, stylesSrc],
    alias: {
      Components: path.resolve(scriptsSrc, 'components'),
      Helpers: path.resolve(scriptsSrc, 'helpers'),
      Optimisations: path.resolve(scriptsSrc, 'optimisations'),
      Settings: path.resolve(scriptsSrc, 'settings'),
      Templates: path.resolve(scriptsSrc, 'templates'),
      Tools: path.resolve(scriptsSrc, 'tools'),
      Utilities: path.resolve(scriptsSrc, 'utilities'),
      Vue: path.resolve(vuePath),
      Src: path.resolve(srcPath)
    },
  },
  devServer: {
    contentBase: srcPath,
    watchContentBase: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(srcPath, "assets/scripts/"),
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: path.join(srcPath, "assets/css/"),
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: vuePath,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            context: path.join(srcPath, "assets/images/site"),
            outputPath: path.join(buildPath, "assets/images/")
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              'scss': [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
              ]
            }
          }
        }
      }
    ]
  },

  plugins: [
    require('autoprefixer'),
    new MiniCssExtractPlugin({
      //filename: devMode ? 'assets/css/[name].[contenthash].css' : 'assets/css/[name].[contenthash].min.css',
      //chunkFilename: devMode ? 'assets/css/[id].[contenthash].css' : 'assets/css/[id].[contenthash].min.css',
      //filename: devMode ? 'assets/css/[name].css' : 'assets/css/[name].min.css',
      filename: 'assets/css/[name].min.css',
      chunkFilename: devMode ? 'assets/css/[id].css' : 'assets/css/[id].min.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: path.join(srcPath, "assets/fonts/"), to: path.join(buildPath, "/assets/fonts/") },
        { from: path.join(srcPath, "assets/icons/"), to: path.join(buildPath, "/assets/icons/") },
        { from: path.join(srcPath, "assets/images/"), to: path.join(buildPath, "/assets/images/") }
      ],
    }),
    new VueLoaderPlugin()
  ]
}