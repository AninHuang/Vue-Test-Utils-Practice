import AlertMessage from '@/alert-message'
import { mount } from '@vue/test-utils'

jest.useFakeTimers()

describe('lifecycle methods', () => {
    test('mounted assigns interval', () => {
        const wrapper = mount(AlertMessage)

        expect(wrapper.vm.interval).not.toBe(undefined)
    })

    test('counter works', () => {
        const wrapper = mount(AlertMessage)

        expect(wrapper.vm.counter).toBe(0)
        jest.advanceTimersByTime(1000)
        expect(wrapper.vm.counter).toBe(1)
        jest.advanceTimersByTime(1000)
        expect(wrapper.vm.counter).toBe(2)
    })

    test('instance gets destroyed', () => {
        // spy watch the function if it's called or not
        const beforeDestroyedSpy = jest.spyOn(AlertMessage, 'beforeDestroy')
        // It's important that we set up the spy before mounting the instance,
        // as Vue transforms the component into vm object
        const wrapper = mount(AlertMessage)

        wrapper.vm.counter = wrapper.vm.timer - 1
        jest.advanceTimersByTime(1000)
        expect(beforeDestroyedSpy).toHaveBeenCalled()
    })
})
