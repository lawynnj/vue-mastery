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
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENTS_TOTAL(state, total) {
      state.eventstotal = total
    }
  },
  actions: {
    createEvent({ commit }, payload) {
      return EventService.postEvent(payload).then(() => {
        commit('ADD_EVENT', payload)
      })
    },
    fetchEvents({ commit }, { perPage, page }) {
      return EventService.getEvents(perPage, page).then(res => {
        commit('SET_EVENTS_TOTAL', parseInt(res.headers['x-total-count']))
        commit('SET_EVENTS', res.data)
      })
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(e => e.id === id)
    }
  }
})
