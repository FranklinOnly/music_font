import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue' // 引入 Home页面组件
 
// 注册路由插件
Vue.use(VueRouter)

export let useRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/register/Register.vue')
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('../views/index/index.vue'),
      children:[
        {
          path: '/songlist',
          name: 'songList',
          component: () => import('../views/list/songList.vue')
        },
        {
          path: '/singerlist',
          name: 'singerList',
          component: () => import('../views/list/singerList.vue')
        },
        {
          path: '/list',
          name: 'List',
          component: () => import('../views/list/list.vue')
        },
        {
          path: '/EA',
          name: 'EA',
          component: () => import('../views/playlist/EA.vue')
        },
        {
          path: '/pop',
          name: 'pop',
          component: () => import('../views/playlist/pop.vue')
        },
        {
          path: '/Chinese',
          name: 'Chinese',
          component: () => import('../views/playlist/Chinese.vue')
        },
        {
          path: '/rock',
          name: 'rock',
          component: () => import('../views/playlist/rock.vue')
        },
        {
          path: '/upload',
          name: 'upload',
          component: () => import('../views/upload/Upload.vue')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('../views/user/user.vue')
        }
      ]
    },
  ]
})


// 
// const routes = [
//   // {
//   //   path: '/',
//   //   name: 'Home',
//   //   component: Home
//   // },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import('../views/About.vue')
//   },
//   {
//     path: '/',
//     name: 'Login',
//     component: () => import('../views/login/Login.vue')
//   },
//   {
//     path: '/register',
//     name: 'Register',
//     component: () => import('../views/register/Register.vue')
//   },
//   {
//     path: '/index',
//     name: 'Index',
//     component: () => import('../views/index/Index.vue'),
//     children:[
//       {
//         path: '/songlist',
//         name: 'songList',
//         component: () => import('../views/list/songList.vue')
//       },
//       {
//         path: '/singerlist',
//         name: 'songerList',
//         component: () => import('../views/list/singerList.vue')
//       }
//     ]
//   },
  
// ]
 
// const router = new VueRouter({
//   routes
// })
 
// export default router