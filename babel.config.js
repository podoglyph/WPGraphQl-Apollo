module.exports = function (api) {
  api.cache(true); // configure this according to your needs.

  const presets = [
    '@babel/preset-env'
  ];

  return {
    presets
  };
}
