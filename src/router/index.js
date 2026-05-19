import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Catalog from '../pages/Catalog.vue'
import About from '../pages/About.vue'
import Contacts from '@/pages/Contacts.vue'

const routes = [
  {
    path: '/',
    component: Home
  },

  {
    path: '/catalog',
    component: Catalog
  },
    {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contacts',
    component: Contacts
  },
  {
  path: '/about',
  component: About
}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router