import Vuex from 'vuex'
import EventCreate from '@/views/EventCreate.vue'

import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('EventCreate', () => {
  let actions, store
  beforeEach(() => {
    actions = {
      createEvent: jest.fn()
    }

    const event = {
      namespaced: true,
      actions
    }

    store = new Vuex.Store({
      modules: {
        event
      },
      state: {
        categories: []
      }
    })
  })

  test('createEvent() is invoked on submit', () => {
    const createEventMock = jest.fn()
    const wrapper = shallowMount(EventCreate, {
      attachToDocument: true,
      store,
      localVue,
      methods: {
        createEvent: createEventMock
      }
    })
    wrapper.find('form').trigger('submit.prevent')
    expect(createEventMock).toHaveBeenCalled()
  })

  test('EventCreate renders correctly', () => {
    // const createFreshEventObjectMock = jest.fn()
    // createFreshEventObjectMock.mockReturnValue(() => ({}))

    const wrapper = shallowMount(EventCreate, {
      store,
      localVue,
      methods: {
        // createFreshEventObject: createFreshEventObjectMock
      }
    })
    wrapper.setData({
      time: [],
      event: {}
    })
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
