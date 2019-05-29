import Login from '@/views/Login.vue'
const routes = [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Home.vue'),
      children:[{
          path: '/',
          name: 'dashBoard',
          component: () => import('@/views/DashBoard.vue')
      }]
    },
    
  ]
  export default routes