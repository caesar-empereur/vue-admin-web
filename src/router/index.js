import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  base : '/turkey/',
  mode : "hash",
  routes: [
      {
          path: '/',
          redirect: '/dashboard'
      },
      {
          path: '/login',
          component: () => import('@/components/Login'),
          meta: { title: '登陆' }
      },
      {
          path: '/',
          name: 'home',
          component: () => import('@/components/Home'),
          children: [
              {
                  path: '/dashboard',
                  component: () => import('@/components/DashboardNew'),
                  meta: { title: '系统首页' }
              }
          ]
      }
  ]
});
