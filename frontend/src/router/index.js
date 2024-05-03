// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Alone',
    name: 'Alone',
    component: () => 
    import(/* webpackChunkName: "alone" */'@/views/Alone.vue'),
  },
  {
    path: '/Eco',
    name: 'Eco',
    component: () => 
    import(/* webpackChunkName: "eco" */'@/views/Eco.vue'),
  },
  {
    path: '/Washingpower',
    name: 'Washingpower',
    component: () => 
    import(/* webpackChunkName: "washingpower" */'@/views/Washingpower.vue'),
  },
  {
    path: '/Night',
    name: 'Night',
    component: () => 
    import(/* webpackChunkName: "night" */'@/views/Night.vue'),
  },
  {
    path: '/Compact',
    name: 'Compact',
    component: () => 
    import(/* webpackChunkName: "compact" */'@/views/Compact.vue'),
  },
  {
    path: '/Quality',
    name: 'Quality',
    component: () => 
    import(/* webpackChunkName: "quality" */'@/views/Quality.vue'),
  },
  {
    path: '/Error',
    name: 'Error',
    component: () => 
    import(/* webpackChunkName: "error" */'@/views/Error.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
