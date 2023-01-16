<template>
  <div class="app-container">
    <!-- 路由占位符 -->
    <keep-alive include="HomeView">
      <router-view></router-view>
    </keep-alive>
    <!-- Tabbar -->
    <!-- route 为开启路由模式 -->
    <!-- placeholder 为底部等高占位 -->
    <van-tabbar route placeholder>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

</style>
