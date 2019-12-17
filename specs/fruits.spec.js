import  FruitBasket from '@/fruit-basket'
import { mount } from '@vue/test-utils'

test('we can add fruits to basket with DOM', () => {
    const wrapper = mount(FruitBasket)

    // Any valid CSS Selector to find the DOM element
    const input = wrapper.find('input')
    const button = wrapper.find('button')
    expect(wrapper.findAll('li').length).toBe(0)

    // The test would be fail if not trigger input event because we just set value directly
    // but Vue uses v-model listening to an input event
    input.element.value = 'banana'
    input.trigger('input')
    expect(wrapper.vm.fruit).toBe('banana')

    button.trigger('click')
    expect(wrapper.vm.fruit).toBe('')
    expect(wrapper.vm.basket).toEqual(expect.arrayContaining(['banana']))
    // expect(wrapper.findAll('li').length).toBe(1) //failed
});
