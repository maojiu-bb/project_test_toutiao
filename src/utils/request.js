// 导入 axios
import axios from 'axios'

const request = axios.create({
  // 配置请求根路径
  baseURL: 'https://applet-base-api-t.itheima.net'
})

export default request
