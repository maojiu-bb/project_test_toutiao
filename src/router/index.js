import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import HomeView from '@/views/Home/HomeView.vue'
import UserView from '@/views/User/UserView.vue'

Vue.use(VueRouter)

// 路由规则的数组
const routes = [
  // 主页的路由规则
  { path: '/', component: HomeView },
  // 我的路由规则
  { path: '/user', component: UserView }
]

const router = new VueRouter({
  routes
})

export default router
