const createBabelConfig = () => ({
  babelrc: false,
  presets: [
    [
      '@babel/preset-env',
      {
        'targets': {
          'node': 'current',
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['react-hot-loader/babel', '@babel/plugin-proposal-class-properties'],
})

module.exports = { createBabelConfig }
