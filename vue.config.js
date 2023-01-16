// 底层运用了 node.js ，所以可以导入 node 核心模块
const path = require('path')
const themePath = path.join(__dirname, './src/theme.less')

// vue-cli 创建的配置文件
module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 'nav-bar-background-color': '#007bff'
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${themePath}";`
          }
        }
      }
    }
  }
}
