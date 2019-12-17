import GithubCard from '@/github-card'
import { mount } from '@vue/test-utils'

describe('methods', () => {
    test('composeUrl', () => {
        // Vue.js methods are just plain functions, 
        // which means that we do not need to mount our component to test the functionality.
        const { composeUrl } = GithubCard.methods

        expect(composeUrl('AninHuang')).toBe('https://api.github.com/users/AninHuang')
    })
})
