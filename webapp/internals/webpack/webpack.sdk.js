// Important modules this config uses
const path = require('path')
const { HashedModuleIdsPlugin } = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = require('./webpack.base.babel')({
  mode: 'production',

  // In production, we skip all hot-reloading stuff
  entry: {
    sdk: [path.join(process.cwd(), 'sdk/app.tsx')],
    'sdk.min': [path.join(process.cwd(), 'sdk/app.tsx')]
  },

  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'sdk',
    umdNamedDefine: true,
    libraryExport: 'default'
  },

  tsLoaders: [
    {
      loader: 'babel-loader'
    }
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            comparisons: false
          },
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true
          }
        },
        parallel: true,
        cache: true,
        sourceMap: true,
        include: /\.min\.js$/
      })
    ],
    nodeEnv: 'production',
    sideEffects: true,
    concatenateModules: true
    // runtimeChunk: true  // 是否分离出 rumtime chunk
  },

  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),

    new HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20
    }),

    new CaseSensitivePathsPlugin(),

    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: 'localhost',
      analyzerPort: 5000,
      reportFilename: 'report.html',
      defaultSizes: 'parsed',
      openAnalyzer: true,
      generateStatsFile: true,
      statsFilename: '../stats.json',
      statsOptions: null,
      logLevel: 'info'
    })
  ],

  performance: {
    assetFilter: (assetFilename) =>
      !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)
  }
})
