// 页面路由
export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/home.vue'),
  },
]
