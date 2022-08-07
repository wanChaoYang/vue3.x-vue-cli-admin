const { defineConfig } = require('@vue/cli-service')
const path = require("path")
const config = require("./src/config/webConfig.js")
console.log("config", config)
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  pages: {
    index: {
      entry: `./src/${config.name}/main.ts`,
      template: 'public/index.html',// 模板来源
      title: '管理系统',
    }
  },
  outputDir: `./dit/${config.name}`,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, `./src/${config.name}`),
        "@COMMON": path.resolve(__dirname, `./src/common`),
        "@ADMIN": path.resolve(__dirname, `./src/admin`),
      },
      extensions: [ '.js', '.vue', 'ts' ],//这三种文件格式可以不写后缀名
      modules: [ "node_modules" ]
    },
  },
  devServer: {
    port: config.port,
    host: "localhost",
    hot: false,
    open: true,
  },
})
