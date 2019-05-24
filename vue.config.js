const path = require('path')

const resolve = dir => path.join(__dirname, dir)
module.exports = {
  publicPath: process.env.NODE_ENV === 'procution' ? './' : './',
  outputDir:'dist', // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  assetsDir:'static',  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  productionSourceMap:false, //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  css: {
    loaderOptions: {
      // 向所有 Sass 样式传入共享的全局变量
      sass: {
        // data: '@import "@/scss/settings.scss";'
      }
    }
  },
  // pages: {//在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。其值应该是一个对象，对象的 key 是入口的名字
  //   index: {
  //     // page 的入口
  //     entry: 'src/index/main.js',
  //     // 模板来源
  //     template: 'public/index.html',
  //     // 在 dist/index.html 的输出
  //     filename: 'index.html',
  //     // 当使用 title 选项时，
  //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: 'Index Page',
  //     // 在这个页面中包含的块，默认情况下会包含
  //     // 提取出来的通用 chunk 和 vendor chunk。
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   },
  //   // 当使用只有入口的字符串格式时，
  //   // 模板会被推导为 `public/subpage.html`
  //   // 并且如果找不到的话，就回退到 `public/index.html`。
  //   // 输出文件名会被推导为 `subpage.html`。
  //   subpage: 'src/subpage/main.js'
  // }, 
  lintOnSave: false, //是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  devServer: {  //你也可以通过设置让浏览器 overlay 同时显示警告和错误
    // 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器
    // proxy: 'http://localhost:4000',
    overlay: {
      warnings: true,
      errors: true
    }
  },
  chainWebpack:config =>{
    config.resolve.alias
    .set('@',resolve('src'))
    .set('_c',resolve('src/components'))
  },
  // 第三方插件配置
  pluginOptions: {
  
  }
}
