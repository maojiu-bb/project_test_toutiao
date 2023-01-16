<template>
  <div class="home-container">
    <!-- 头部 nva-bar -->
    <!-- fixed 为固定在头部 -->
    <!-- placeholder 为在头部有等高占位 -->
    <van-nav-bar title="黑马头条" fixed placeholder />

      <!-- 外面再嵌套一层下拉刷新 -->
      <van-pull-refresh v-model="isLoading" :disabled="finished" @refresh="onRefresh">
        <!-- 通过 vant 插件提供的上拉加载更多将文章列表包裹 -->
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" >
          <!-- 文章列表详情 -->
          <ArticleInfo v-for="item in artList" :key="item.id" :title="item.title" :author="item.aut_name" :com-count="item.comm_count" :time="item.pubdate" :cover="item.cover"></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// 导入 articleAPI 模块
import { getArticleList } from '@/api/articleAPI.js'
// 导入 ArticleInfo 组件
import ArticleInfo from '@/components/ArticleInfo/ArticleInfo.vue'

export default {
  data () {
    return {
      page: 1,
      limit: 10,
      artList: [],
      // loading 和 finished 两个变量控制加载状态，当组件滚动到底部时，会触发 load 事件并将 loading 设置成 true
      loading: true,
      finished: false,
      // isLoading 为下拉刷新
      isLoading: false
    }
  },
  components: {
    ArticleInfo
  },
  methods: {
    async initArticleList (isRefresh) {
      const { data: res } = await getArticleList(this.page, this.limit)
      // this.artList = res
      // 将接收到的数据进行拼接
      // this.artList = [...this.artList, ...res] 扩展
      // 或者用数组的 concat 方法

      // 判断是刷新还是加载更多
      if (isRefresh) {
        // 下拉刷新
        this.artList = res.concat(this.artList)
        this.isLoading = false
      } else {
        // 加载更多
        this.artList = this.artList.concat(res)
        this.loading = false
      }
      // 判断数据是否请求完
      if (res.length === 0) {
        this.finished = true
      }
    },
    // 上拉加载更多
    onLoad () {
      // 文章列表页码值+1
      this.page += 1
      // 重新请求数据
      this.initArticleList(false)
    },
    // 下拉刷新
    onRefresh () {
      // 页码+1
      this.page += 1
      // 重新调接口
      this.initArticleList(true)
    }
  },
  created () {
    this.initArticleList()
  }
}
</script>

<style lang="less" scoped>

</style>
