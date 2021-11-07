import { createStore } from 'vuex'
import states from '../../src/store/state'
import NavBar from '../../src/components/Navbar.vue'
import {mount} from '@vue/test-utils'
import cart from '../unit/cart.exemple'
import mutation from '../../src/store/mutation'

const store = createStore({ state: states , mutations: mutation})

test('No items in your cart', async () => {
    const wrapper = mount(NavBar, {
        global: {
        plugins: [store]
        }
    })

    await wrapper.find('ul > li > img').trigger('click');
    wrapper.find('div > h2');
    expect(wrapper.html()).toContain('No items in your cart');
    expect(wrapper.vm.$store.state.total).toBe(0);
})


test('Cart full', async () => {
    const wrapper = mount(NavBar, {
        global: {
            plugins: [store]
        }
    })

    wrapper.vm.addToCart(cart);
    await wrapper.find('ul > li > img').trigger('click');
    wrapper.find('#article > p');
    expect(wrapper.html()).toContain('Charizard');
    wrapper.find('#article > img');
    // expect(wrapper.attributes().src).toBe('https://images.pokemontcg.io/swsh4/25.png')
    wrapper.find('#total > p');
    expect(wrapper.html()).toContain('Total : 9.95 $');
    expect(wrapper.vm.$store.state.total).toBe("9.95");
})

test('Adding a card from the cart', async () => {
    const wrapper = mount(NavBar, {
        global: {
            plugins: [store]
        }
    })

    await wrapper.find('ul > li > img').trigger('click');
    wrapper.find('#article > p');
    expect(wrapper.html()).toContain('Charizard');
    wrapper.find('#article > img');
    // expect(wrapper.attributes().src).toBe('https://images.pokemontcg.io/swsh4/25.png')
    await wrapper.find('#addOneFromCart').trigger('click');
    wrapper.find('#total > p');
    expect(wrapper.html()).toContain('Total : 19.90 $');
    expect(wrapper.vm.$store.state.total).toBe("19.90");
})

test('Deletion and discount to zero of the basket', async () => {
    const wrapper = mount(NavBar, {
        global: {
            plugins: [store]
        }
    })

    await wrapper.find('ul > li > img').trigger('click');
    wrapper.find('#article > p');
    expect(wrapper.html()).toContain('Charizard');
    wrapper.find('#article > img');
    // expect(wrapper.attributes().src).toBe('https://images.pokemontcg.io/swsh4/25.png')
    wrapper.find('#total > p');
    expect(wrapper.html()).toContain('Total : 19.90 $');
    expect(wrapper.vm.$store.state.total).toBe("19.90");
    await wrapper.find('#removeOneFromCart').trigger('click');
    wrapper.find('#total > p');
    expect(wrapper.html()).toContain('Total : 9.95 $');
    expect(wrapper.vm.$store.state.total).toBe("9.95");
    await wrapper.find('#removeOneFromCart').trigger('click');
    wrapper.find('div > h2');
    expect(wrapper.html()).toContain('No items in your cart');
    expect(wrapper.vm.$store.state.total).toBe("0.00");
})