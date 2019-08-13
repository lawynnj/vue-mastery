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
    ],
    count: 0
  },
  mutations: {
    INCREMENT_COUNT(state, val) {
      state.count += val
    }
  },
  actions: {},
  getters: {
    getEventById: state => id => {
      return state.events.find(e => e.id === id)
    }
  }
})
