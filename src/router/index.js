import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'
import Home2 from '../views/home/heme.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home' // 强制跳转
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '', // 二级路由地址什么都不写 ，代表耳机路由默认组件
      component: Home2
    }, {
      path: '/home/comment', // 完整 相对
      component: () => import('../views/comment')
    }, {
      path: '/home/material',
      component: () => import('../views/material')
    }, {
      path: 'articles', // 文章列表
      component: () => import('../views/articles')
    }, {
      path: 'publish', // 发布文章
      component: () => import('../views/publish')
    }, {
      path: 'publish/:articleId', // 修改文章
      component: () => import('../views/publish')
    }, {
      path: 'account',
      component: () => import('../views/account')
    }]
  }, {
    path: '/login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
