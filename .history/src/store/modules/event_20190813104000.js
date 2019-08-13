import EventService from '@/services/EventService.js'

export const state = { 
events: [],
event: {},
eventsTotal: 0
};

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
},

export const actions = {
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
}'
'
export const getters = {
getEventById: state => id => {
  return state.events.find(e => e.id === id)
}
}
})
