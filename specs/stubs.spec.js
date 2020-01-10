import { shallowMount } from '@vue/test-utils';
import ListComponent from '@/list';

const ListItemStub = {
    template: `<li>{{ movie }}</li>`,
    props: ['movie']
}

test('shallowMount', () => {
    const wrapper = shallowMount(ListComponent, {
        stubs: {
            ListItem: ListItemStub
        }
    });
    expect(wrapper).toMatchSnapshot();
});

// 若已產生過 snapshot，則指令需加入 flag (-u) 以更新
// 如：npm run jest --watch -u .\specs\stubs.spec.js

// A stub is simply a piece of code that stands in for another part (for instance a child component). 
// We can use stubs to replace components that are annoying to have running in every test
