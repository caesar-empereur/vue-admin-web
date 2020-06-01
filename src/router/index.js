import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
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
              },
              {
                  path: '/order',
                  component: () => import('@/components/Order'),
                  meta: { title: '订单管理' }
              },
              {
                  path: '/sku',
                  component: () => import('@/components/Sku'),
                  meta: { title: '商品管理' }
              },
              {
                  path: '/monitor',
                  component: () => import('@/components/Monitor'),
                  meta: { title: '网页实时监控' }
              },
              {
                  path: '/analysis-sell',
                  component: () => import('@/components/SellChart'),
                  meta: { title: '商品销售分析' }
              },
              {
                  path: '/analysis-user',
                  component: () => import('@/components/UserChart'),
                  meta: { title: '用户点击分析' }
              }
          ]
      }
  ]
});
