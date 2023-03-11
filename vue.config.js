const ScriptSetup = require('unplugin-vue2-script-setup/webpack').default

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  parallel: false, // disable thread-loader, which is not compactible with this plugin
  configureWebpack: {
    plugins: [ScriptSetup({})],
  },
}
