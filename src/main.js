import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";

let cart = [];

export function addToCart(card) {
    cart[card.id] = JSON.parse(`{"cart": ${JSON.stringify(card)} }`);
}

export function getCart() {
    return cart;
}

createApp(App).use(store).mount('#app')
