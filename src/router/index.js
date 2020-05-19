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
      },
      {
          path: '/',
          name: 'home',
          component: () => import('@/components/Home'),
          children: [
              {
                  path: '/dashboard',
                  component: () => import('@/components/Dashboard'),
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
                  path: '/hit-count',
                  component: () => import('@/components/HitCount'),
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
              },
              {
                  path: '/analysis-echart1',
                  component: () => import('@/components/Echart1'),
                  meta: { title: '用户习惯分析' }
              },
              {
                  path: '/analysis-echart2',
                  component: () => import('@/components/Echart2'),
                  meta: { title: '年度利润分析' }
              }
          ]
      }
  ]
});
