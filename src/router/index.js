import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Category from '@/components/Category'
import Portfolio from '@/components/Portfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/portfolio/:slug',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})
