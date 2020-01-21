import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '/',
      name: 'dashBoard',
      alisa:'dashBoard',
      component: () => import('@/views/DashBoard.vue')
    },
    {
      path: '/tableBoard',
      name: 'tableBoard',
      component: () => import('@/views/TableBoard.vue')
    }]
  }

]
export default routes
