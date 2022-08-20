module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['import', {libraryName: '@ant-design/react-native'}], // 与 Web 平台的区别是不需要设置 style
    ],
  };
};