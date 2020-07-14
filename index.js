module.exports = {
  presets: () => {
    require.resolve('@babel/preset-env');
    require.resolve('@babel/preset-stage-1');
  },
  plugins: () => {
    require.resolve('babel-plugin-transform-react-jsx');
  }
};