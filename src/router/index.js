import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ScooterTier from "../views/ScooterTier.vue"
import BikeVelocity from "../views/BikeVelocity.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/scooter/tier',
    name: 'Scooter_Tier',
    component: ScooterTier
  },
  {
    path: '/bike/velocity',
    name: 'Bike_Velocity',
    component: BikeVelocity
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
