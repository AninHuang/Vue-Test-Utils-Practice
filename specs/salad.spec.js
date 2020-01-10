import Vuex from 'vuex'
import Vue from 'vue'
import { mount } from '@vue/test-utils'

import SaladBowlComponent from '@/salad-bowl'
import saladStore from '@/store/salad-store'

Vue.use(Vuex)

const store = new Vuex.Store(saladStore)

test('store is loaded', () => {
    const wrapper = mount(SaladBowlComponent, {
        store
    })
    store.state.salad.push('cucumber')

    expect(wrapper.vm.salad).toEqual(['cucumber'])
})

test('store works', () => {
    const wrapper = mount(SaladBowlComponent, {
        store
    })
    wrapper.vm.addIngredient('tomato')

    expect(wrapper.vm.salad).toEqual(['tomato'])
})
