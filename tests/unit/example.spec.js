import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import './setup'

describe('HelloWorld.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      vuetify,
      propsData: { msg }
    })

    expect(wrapper.text()).toMatch(msg)
  })
})
