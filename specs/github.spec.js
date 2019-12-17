import GithubCard from '@/github-card'
import { mount } from '@vue/test-utils'

describe('methods', () => {
    test('composeUrl', () => {
        // Vue.js methods are just plain functions, 
        // which means that we do not need to mount our component to test the functionality.
        const { composeUrl } = GithubCard.methods

        expect(composeUrl('AninHuang')).toBe('https://api.github.com/users/AninHuang')
    })

    test('fetchData', async () => {
        /**
         * Mock functions are also known as "spies",
         * because they let you spy on the behavior of a function
         * that is called indirectly by some other code,
         * rather than only testing the output.
         */
        // Handle this line: this.data = await response.json();
        const jsonMock = jest.fn().mockResolvedValue('GITHUB DATA')

        // The fetch() API is landing in the window object and is looking to replace XHRs.
        // it makes network requests similar to XMLHttpRequest (XHR), but it uses Promises.
        // Handle this line: const response = await fetch(this.url);
        window.fetch = jest.fn().mockResolvedValue({
            json: jsonMock
        })

        // As this method has reference to functions and data all over the place,
        // we want the wrapper back.

        // composeUrl has already been tested,
        // so detract the knowns and simplify them
        // Handle this line: this.url = this.composeUrl(this.username)
        const wrappper = mount(GithubCard, {
            methods: {
                composeUrl: () => 'url'
            }
        })

        await wrappper.vm.fetchData()

        expect(window.fetch).toHaveBeenCalledWith('url')
        expect(jsonMock).toHaveBeenCalled()
        expect(wrappper.vm.data).toBe('GITHUB DATA')
    })
})
