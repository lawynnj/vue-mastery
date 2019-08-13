import Vuex from 'vuex'
import EventList from '@/views/EventList.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('EventList', () => {
  let store
  const $route = {
    query: { page: '1' }
  }
  beforeEach(() => {
    const user = {}
    const event = {
      namespaced: true,
      actions: {
        fetchEvents: jest.fn()
      },
      state: {
        perPage: 1,
        events: [],
        eventsTotal: 1
      }
    }
    const notification = {
      actions: {
        add: jest.fn(),
        delete: jest.fn()
      }
    }

    store = new Vuex.Store({
      modules: {
        user,
        event,
        notification
      },
      state: {
        categories: []
      }
    })
  })

  test('EventList renders correctly', () => {
    const wrapper = shallowMount(EventList, {
      store,
      localVue,
      mocks: { $route }
    })
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
