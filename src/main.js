import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

// global components
// Exposes any component that contains base in it's file name to the global vue object
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

// Configure the app with a router, store and the root component to render at the #app element
new Vue({
  router,
  store, // Vuex
  render: h => h(App)
}).$mount('#app')
