const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //项目上线时去除map文件
  productionSourceMap:false,
  transpileDependencies: true,
  //关闭eslint
  lintOnSave:false,
  //代理跨域
  devServer:{
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
      //   pathRewrite: {"^/api" : ""}
      }
    }
  }
})
