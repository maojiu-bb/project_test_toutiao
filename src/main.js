import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入并安装juan vant
import Vant from 'vant'
// 为了修改 less 变量，所以要导入 less 样式
import 'vant/lib/index.less'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
