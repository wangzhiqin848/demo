import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import City from '../pages/city/City'
import Details from '../pages/details/Details'
import Strategy from '../pages/strategy/Strategy'
import Estimate from '../pages/estimate/Estimate'
import Show from '../pages/show/Show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: '/city',
      component: City
    },
    {
      path: '/details',
      name: '/details',
      component: Details
    },
    {
      path: '/strategy',
      name: '/strategy',
      component: Strategy
    },
    {
      path: '/estimate',
      name: '/estimate',
      component: Estimate
    },
    {
      path: '/show',
      name: '/show',
      component: Show
    }
  ]
})
