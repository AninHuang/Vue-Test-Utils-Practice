import { shallowMount } from '@vue/test-utils';
import ListComponent from '@/list';

test('shallowMount', () => {
    const wrapper = shallowMount(ListComponent, {
        stubs: {
            ListItem: `<div class="list-item" />`
        }
    });
    expect(wrapper).toMatchSnapshot();
});
