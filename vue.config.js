const path = require('path')
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const resolve = dir => path.join(__dirname, dir)
/** 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，
 * 例如 https://www.my-app.com/。如果应用被部署在一个子路径上，
 * 你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，
 * 则设置 publicPath 为 /my-app/。这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')
 */
/** 相对路径的 publicPath 有一些使用上的限制。在以下情况下，应当避免使用相对 publicPath:
 *当使用基于 HTML5 history.pushState 的路由时；
 *当使用 pages 选项构建多页面应用时。
 */
const publicPath = process.env.NODE_ENV === 'procution' ? './' : './'
module.exports = {
  lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  css: {
    loaderOptions: {
      // 向所有 Sass 样式传入共享的全局变量
      sass: {
        // data: '@import "@/scss/settings.scss";'
      }
    }
  },

  configureWebpack: {
    // performance: {
    //   hints:false
    // },
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery'
      }),


// new htmlWebpackPlugin({
      //   filename: 'index.html',
      //   template: 'index.html',
      //   inject: 'head'
      // }),
      // new webpack.HotModuleReplacementPlugin(),
      // new UglifyJsPlugin({  //压缩文件
      //   test: /\.js(\?.*)?$/i
      // })
    ]
  },
  publicPath: publicPath, // baseUrl 从 Vue CLI 3.3 起已弃用，请使用publicPath
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false, // 打包时不生成.map文件
  outputDir: 'dist', // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录,默认'dist'
  assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  filenameHashing: true, // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
  devServer: {
    hot: true,
    open: true,
    // proxy:'http://localhost:8080' //devServer.proxy 可以是一个指向开发环境 API 服务器的字符串：
  },
  // 第三方插件配置
  pluginOptions: {
  }
}
