import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeBirre from '../views/HomeBirre.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/birre',
    name: 'HomeBirre',
    component: HomeBirre
  },
  {
    path: '/',
    name: 'Lead',
    // route level code-splitting
    // this generates a separate chunk (Lead.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Lead" */ '../views/Lead.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
