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
    count: 0,
    events: []
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
      return EventService.postEvent(payload).then(() => {
        commit('ADD_EVENT', payload)
      })
    },
    getEvents({ commit }) {
      return EventService.getEvents().then(response => {
        commit('ADD_EVENTS', response.data)
      })
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(e => e.id === id)
    }
  }
})
