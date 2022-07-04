const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// Vue CLI에서는 prefetch 기능이 기본적으로 true로 설정되어있음
// prefetch 기능 끄려면 아래 코드 추가
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch');//prefetch 삭제
  }
}