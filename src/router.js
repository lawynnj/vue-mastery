import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import EventCreate from './views/EventCreate.vue'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'
import NotFound from './views/NotFound.vue'
import BaseTemplate from './views/BaseTemplate.vue'

Vue.use(Router)

// All the routes that are accessible in our application
// each route is associated with a component
// We can access these routes directly or through links
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list', // we can also refer to specific routes using names
      component: EventList,
      props: true
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      props: true
    },
    {
      path: '/name',
      component: BaseTemplate
    },
    {
      path: '*',
      redirect: { name: '404', params: { resource: 'page' } }
    }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
