import fs from 'fs'
import path from 'path'
import DirectoryNamedWebpackPlugin from 'directory-named-webpack-plugin'
import fiber from 'fibers'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import sass from 'sass'
import webpack from 'webpack'

const ENVIRONMENT = process.env.NODE_ENV || 'development'
const PRODUCTION = ENVIRONMENT === 'production'

const flatten = array => array.reduce((all, next) => {
  if (next && Array.isArray(next)) return all.concat(flatten(next))
  return all.concat(next)
}, [])

const walk = (dir, filelist = []) => {
  const files = fs.readdirSync(dir)

  return flatten(filelist.concat(files.map((file) => {
    const filepath = path.join(dir, file)
    const stat = fs.statSync(filepath)

    if (stat.isDirectory()) return walk(filepath, filelist)
    return filepath
  })))
}

const entryPoints = []
  .concat(
    walk(path.resolve(__dirname, './utilities')),
    walk(path.resolve(__dirname, './components'))
  )
  .filter(filePath => filePath.match(/.js$/))
  .filter(filePath => !filePath.match(/(.test.js$|\/(build|node_modules)\/)/))
  // .map(filePath => path.relative(__dirname, filePath))

export default {
  devtool: 'source-map',
  entry: entryPoints.reduce((all, next) => {
    const name = next.split('/').pop().split('.').shift()
    return { ...all, [name]: next }
  }, {}),
  mode: 'production',
  module: {
    rules: [
      /* eslint-disable sort-keys */
      { test: /\.s?css$/, use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', { loader: 'sass-loader', options: { fiber, implementation: sass } }] },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      /* eslint-enable sort-keys */
    ],
  },
  optimization: { minimize: PRODUCTION },
  output: {
    filename: PRODUCTION ? '[name].min.js' : '[name].js',
    library: 'core',
    libraryTarget: 'umd',
    path: `${__dirname}/build`,
    umdNamedDefine: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({ chunkFilename: '[name].css', filename: '[name].css' }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(ENVIRONMENT) }),
  ],
  resolve: {
    alias: { '@': __dirname },
    extensions: ['.css', '.js', '.scss'],
    modules: ['node_modules'],
    plugins: [new DirectoryNamedWebpackPlugin()],
  },
  stats: {
    all: false,
    builtAt: true,
  },
}
