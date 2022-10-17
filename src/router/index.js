import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import Home from '../views/Home.vue'
import CalculatorView from '../views/CalculatorView.vue'
import StringManipulation from '../views/StringManipulation.vue'
import AboutVuetify from '../views/AboutVuetify.vue'
import ComAPI from '../views/ComAPI.vue'
import ComputeArea from '../views/ComputeArea.vue'
import Axios from '../views/Axios.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'home',
      component: Home
    },
    {
      path: '/calculator',
      name: 'cal',
      component: CalculatorView
    },
    {
      path: '/string',
      name: 'stringman',
      component: StringManipulation
    },
    {
      path: '/aboutvuetify',
      name: 'vuetifyab',
      component: AboutVuetify
    },
    {
      path: '/composition',
      name: 'com',
      component: ComAPI
    },
    {
      path: '/area',
      name: 'area',
      component: ComputeArea
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView
    },
    {
      path: '/axios',
      name: 'Axios',
      component: Axios
      },

  ]
})

export default router
