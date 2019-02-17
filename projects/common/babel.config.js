module.exports = {
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-object-rest-spread',
    '@babel/plugin-transform-runtime',
    'inline-react-svg',
  ],
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', { useBuiltIns: 'entry' }],
  ],
}
