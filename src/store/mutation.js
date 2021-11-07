import totalCart from '../store/totalCart'

export default {
    addToCart(state, card) {
        let add = true;
        if(state.cart.length == 0) {
            state.cart.push(JSON.parse(`{"cardID": "${card.id}", "card": ${JSON.stringify(card)}, "amount": 1}`));
        }
        else{
            for(let i = 0; i < state.cart.length; i++) {
                if(card.id == state.cart[i].card.id) {
                    state.cart[i].amount += 1
                    add = false;
                }
            }
            if(add == true) {
                state.cart.push(JSON.parse(`{"cartID": "${card.id}", "card": ${JSON.stringify(card)}, "amount": 1}`));
            }
        }   
        state.total = totalCart(state);
    },
    removeFromCart(state, card) {
        for(let i = 0; i < state.cart.length; i++) {
            if(card.id == state.cart[i].card.id) {
                state.cart[i].amount -= 1
                if(state.cart[i].amount <= 0) {
                    state.cart.splice(i, 1)
                }
            }
        }
        state.total = totalCart(state);
    }
}