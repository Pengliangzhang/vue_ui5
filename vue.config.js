const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  configureWebpack: {
    module: {
      rules: [
          {
              test: [/cldr\/.*\.json$/, /i18n\/.*\.json$/],
              loader: 'file-loader',
              options: {
                  name: 'static/media/[name].[hash:8].[ext]',
              },
              type: 'javascript/auto'
          }
      ]
    },
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
};
