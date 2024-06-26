import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  plugins: [
    createVuePlugin()
  ],
  define: {
    'process.env': {}
  },
  server: {
    host: "localhost",
    port: 8083, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    // 配置多个代理
    proxy: {
      "/api": {
        target: "http://localhost:8080",// 要访问的接口域名
        ws: true,// 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        // rewrite:path=>path.replace(/^\/api/,'')
        // pathRewrite:{
        //   '^/api':''
        // }
        rewrite:(path)=>path.replace(/^\/api/,"")
      }
    }
  },
  
})