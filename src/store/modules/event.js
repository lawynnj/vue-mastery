import EventService from '@/services/EventService.js'

export const namespaced = true

export const state = {
  events: [],
  event: {},
  eventsTotal: 0,
  perPage: 3
}

// will update/mutate the state
export const mutations = {
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
}

// actions are functions do something and then call another function that updates the state
// Example make api call for data and then update the state with that data
export const actions = {
  createEvent({ commit, dispatch }, payload) {
    return EventService.postEvent(payload)
      .then(() => {
        commit('ADD_EVENT', payload)
        const notification = {
          type: 'success',
          message: 'Event created'
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: 'Unable to create events:' + err.message
        }

        dispatch('notification/add', notification, { root: true })
        throw err
      })
  },
  fetchEvents({ commit, dispatch }, { page }) {
    // Make an API call
    return EventService.fetchEvents(state.perPage, page)
      .then(res => {
        // call a function dedicated to update the state
        commit('SET_EVENTS_TOTAL', parseInt(res.headers['x-total-count']))
        commit('SET_EVENTS', res.data)
      })
      .catch(err => {
        const notification = {
          type: 'error',
          message: 'Unable to fetch events:' + err.message
        }
        dispatch('notification/add', notification, { root: true })
      })
  },
  fetchEvent({ commit, getters, dispatch }, id) {
    const event = getters.getEventById(id)
    if (event) {
      commit('SET_EVENT', event)
    } else {
      EventService.fetchEvent(id)
        .then(res => {
          commit('SET_EVENT', res.data)
        })
        .catch(err => {
          const notification = {
            type: 'error',
            message: 'Unable to fetch event:' + err.message
          }
          dispatch('notification/add', notification, { root: true })
        })
    }
  }
}

export const getters = {
  getEventById: state => id => {
    return state.events.find(e => e.id === id)
  }
}
