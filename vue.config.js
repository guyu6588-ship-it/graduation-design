const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.ts',
      title: '毕业设计项目开发展示',
    },
  },
})
