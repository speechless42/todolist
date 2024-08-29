const { defineConfig } = require('@vue/cli-service')
// const AutoImport = require('unplugin-auto-import/webpack')
// const Component = require('unplugin-vue-import/webpack')
// const {ElementPlusResolver} = require('unplugin-vue-import/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack:{
  //   plugins:[
  //     AutoImport({resolvers:[ElementPlusResolver()]}),
  //     Component({resolvers:[ElementPlusResolver()]})
  //   ]
  // }
  publicPath: process.env.NODE_ENV === 'production'
    ? '/todolist/' // test20200915 為 repo 名稱
    : '/'
})
