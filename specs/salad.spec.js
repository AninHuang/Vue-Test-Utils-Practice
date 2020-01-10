import Vuex from 'vuex'
// import Vue from 'vue'
import { mount, createLocalVue } from '@vue/test-utils'

import SaladBowlComponent from '@/salad-bowl'
import saladStore from '@/store/salad-store'

const VueWithVuex = createLocalVue();
VueWithVuex.use(Vuex);
// Vue.use(Vuex) // Gonna pollute the global object in this way

// const store = new Vuex.Store(saladStore)

test('store is loaded', () => {
    const store = new Vuex.Store(saladStore) // Initialize store individually
    const wrapper = mount(SaladBowlComponent, {
        localVue: VueWithVuex,
        store
    })
    store.state.salad.push('cucumber')

    expect(wrapper.vm.salad).toEqual(['cucumber'])
})

test('store works', () => {
    const store = new Vuex.Store(saladStore) // Initialize store individually
    const wrapper = mount(SaladBowlComponent, {
        localVue: VueWithVuex,
        store
    })
    wrapper.vm.addIngredient('tomato')

    expect(wrapper.vm.salad).toEqual(['tomato'])
})
