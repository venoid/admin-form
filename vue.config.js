module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    // remove the old loader
    config.module.rules.delete('svg');
  },
  configureWebpack: {
    module: {
      rules: [{
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      }],
    },
  },
  css: {
    extract: false,
  },
};
