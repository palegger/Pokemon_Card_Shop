export default function totalCart(state) {
    let total = 0;
    if(state.cart.length == 0) {
        total = 0;
    }
    else {
        total = 0;
        for(let i = 0; i < state.cart.length; i++) {
            total += state.cart[i].card.cardmarket.prices.avg1 * state.cart[i].amount;
        } 
    }
    return total.toFixed(2);
}