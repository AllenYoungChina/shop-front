import axios from 'axios'

axios.defaults.baseURL = '/'
// 设置POST请求的数据类型
axios.defaults.headers.post['Content-Type'] = 'application/json'
// 请求超时，单位为毫秒
axios.defaults.timeout = 60000
// 允许请求携带凭据
axios.defaults.withCredentials = true
export default axios