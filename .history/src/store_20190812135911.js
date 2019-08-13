import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'

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
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    ADD_EVENTS(state, events) {
      state.events = events
    }
  },
  actions: {
    createEvent({ commit }, payload) {
      return EventService.postEvent(payload).then(res => {
        commit('ADD_EVENT', payload)
      })
    },
    getEvents({ commit }) {
      return EventService.getEvents().then(response => {
        commit('ADD_EVENTS', response.data)
        // this.events = response.data
      })
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(e => e.id === id)
    }
  }
})
