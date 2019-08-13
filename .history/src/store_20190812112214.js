import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: [
      { id: 1, title: '...', done: true },
      { id: 2, title: '...', done: false },
      { id: 3, title: '...', done: true },
      { id: 4, title: '...', done: false }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneTodos: state => state.todos.filter(t => t.done),
    activeTodosCount: state => state.todos.filter(t => !t.done).length
  }
})
