import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ErrorView from '../views/ErrorView.vue'
import CarrieresView from '../views/CarrieresView.vue'
import EspaceClientView from '../views/EspaceClientView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorView
  },
  {
    path: '/carrieres',
    name: 'carrieres',
    component: CarrieresView
  },
  {
    path: '/espace-client',
    name: 'espace-client',
    component: EspaceClientView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
