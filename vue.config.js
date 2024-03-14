const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3001
  },
  chainWebpack: config => {
    config.module
      .rule('ico')
      .test(/\.ico$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        limit: 8192,
        name: 'img/[name].[hash:8].[ext]',
        fallback: require.resolve('file-loader')
      })
  }
})
