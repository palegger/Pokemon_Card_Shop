import { createStore } from 'vuex'
import states from '../../src/store/state'
import AllCards from '../../src/components/AllCards.vue'
import {shallowMount} from '@vue/test-utils'
import mutation from '../../src/store/mutation'

const store = createStore({ state: states , mutations: mutation})

test('Click previous page on page 1', async () => {
    const wrapper = shallowMount(AllCards, {
        global: {
        plugins: [store]
        }
    })

    await wrapper.find('#previousPage').trigger('click');
    expect(wrapper.vm.page).toBe(1);
})

test('Click next page on page 1', async () => {
    const wrapper = shallowMount(AllCards, {
        global: {
        plugins: [store]
        }
    })

    await wrapper.find('#nextPage').trigger('click');
    expect(wrapper.vm.page).toBe(2);
})

test('On page 2 return on page 1', async () => {
    const wrapper = shallowMount(AllCards, {
        global: {
        plugins: [store]
        }
    })

    await wrapper.find('#nextPage').trigger('click');
    await wrapper.find('#previousPage').trigger('click');
    expect(wrapper.vm.page).toBe(1);
})