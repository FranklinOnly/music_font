import axios from "axios";
import {useRouter} from "../../src/router/index"
export const instance = axios.create({
    baseURL: '/api',
    timeout: 2000,
    headers: {'X-Custom-Header': 'foobar'}
  });

instance.interceptors.response.use((res) => {
    // 请求成功对响应数据做处理
    // 该返回的数据则是axios.then(res)中接收的数据
    // console.log(res.data.code)
    if(res.data.code==2000){
      useRouter.push("/")
    }
    return res
  },
   err => {
    // 在请求错误时要做的事儿
    // 该返回的数据则是axios.catch(err)中接收的数据
    return Promise.reject(err)
  })