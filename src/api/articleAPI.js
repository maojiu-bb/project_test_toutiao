// 导入 request 模块
import request from '@/utils/request.js'

// 按需导出
export const getArticleList = (_page, _limit) => {
  return request.get('/articles', {
    params: {
      _page,
      _limit
    }
  })
}
