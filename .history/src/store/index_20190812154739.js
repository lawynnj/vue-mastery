import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  }.
  state: {
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
    events: [],
    event: {},
    eventsTotal: 0
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENT(state, event) {
      state.event = event
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENTS_TOTAL(state, total) {
      state.eventsTotal = total
    }
  },
  actions: {
    createEvent({ commit }, payload) {
      return EventService.postEvent(payload).then(() => {
        commit('ADD_EVENT', payload)
      })
    },
    fetchEvents({ commit }, { perPage, page }) {
      return EventService.fetchEvents(perPage, page).then(res => {
        commit('SET_EVENTS_TOTAL', parseInt(res.headers['x-total-count']))
        commit('SET_EVENTS', res.data)
      })
    },
    fetchEvent({ commit, getters }, id) {
      const event = getters.getEventById(id)
      if (event) {
        commit('SET_EVENT', event)
      } else {
        EventService.fetchEvent(id).then(res => {
          commit('SET_EVENT', res.data)
        })
      }
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(e => e.id === id)
    }
  }
})
