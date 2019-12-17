import Temprature from '@/temprature'
import { mount } from '@vue/test-utils'

describe('computed', () => {
    test('celsius', () => {
        // Creates a Wrapper that contains the mounted and rendered Vue component
        const wrapper = mount(Temprature)

        // vm is the Vue instance
        // We can access all the instance methods and properties of a vm with wrapper.vm
        expect(wrapper.vm.celsius).toBe(0)

        // Sets Wrapper vm data on each Wrapper in WrapperArray
        wrapper.setData({ degrees: 23 })
        
        expect(wrapper.vm.celsius).toBe(23)
    })

    // Another Way.
    test('celsius', () => {
        const { vm } = mount(Temprature)

        expect(vm.celsius).toBe(0)

        vm.degrees = 23
        
        expect(vm.celsius).toBe(23)
    })

    test('fahrenheit', () => {
        const { vm } = mount(Temprature)

        expect(vm.fahrenheit).toBe(32)

        vm.degrees = 16
        
        expect(vm.fahrenheit).toBe(60.8)
    })
})

test('temp', () => {
    const wrapper = mount(Temprature, {
        propsData: {
            temp: 40
        }
    })
    const { vm } = wrapper

    expect(vm.degrees).toBe(40)
    expect(vm.type).toBe('celsius')
    
    wrapper.setProps({
        temp: '50f'
    })

    expect(vm.degrees).toBe(50)
})
