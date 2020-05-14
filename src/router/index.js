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
                  component: () => import('@/components/Dashboard')
              },
              {
                  path: '/order',
                  component: () => import('@/components/Order')
              },
              {
                  path: '/sku',
                  component: () => import('@/components/Sku')
              },
              {
                  path: '/monitor-mysql',
                  name: 'mysql 监控',
                  component: () => import('@/components/Mysql')
              },
              // {
              //     path: '/monitor-redis',
              //     name: 'redis 监控',
              //     component: () => import('@/components/Dashboard')
              // },
              {
                  path: '/analysis-sku',
                  component: () => import('@/components/SellChart')
              },
              {
                  path: '/analysis-user',
                  component: () => import('@/components/UserChart')
              },
              {
                  path: '/analysis-echart1',
                  component: () => import('@/components/Echart1')
              },
              {
                  path: '/analysis-echart2',
                  component: () => import('@/components/Echart2')
              }
          ]
      }
  ]
});
