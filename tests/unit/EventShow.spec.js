import EventShow from '@/views/EventShow'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('EventList.vue', () => {
  let actions, store

  beforeEach(() => {
    actions = {
      fetchEvent: jest.fn()
    }

    const event = {
      namespaced: true,
      actions,
      state: {
        event: {}
      }
    }
    store = new Vuex.Store({
      modules: {
        event
      }
    })
  })

  it('dispatches "add" when it EventList is created', () => {
    shallowMount(EventShow, { store, localVue })
    expect(actions.fetchEvent).toHaveBeenCalled()
  })

  it('EventList should render correctly', () => {
    const wrapper = shallowMount(EventShow, { store, localVue })
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
