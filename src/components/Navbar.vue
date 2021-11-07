<template>
    <ul>
        <li><h3>Pokemon Card Shop</h3></li>
        <li style="float:right"><img v-on:click='displayCart()' class="active" id="img" src='/cart.png'></li>
    </ul>
    <div id="panier" v-if='this.hidden == false'>
        <table v-if='this.$store.state.total != 0'>
            <tr v-for="card in cart" :key="card.cardID">
                <td>
                    <div id="article">
                        <p>{{card.card.name}}</p>
                        <img style="max-width: 80%" :src="card.card.images.small">
                    </div>  
                </td>
                <td>
                    <div id="articleCount">
                        <button id="removeOneFromCart" v-on:click='removeFromCart(card.card)'>-</button>
                        <p>{{card.amount}}</p>
                        <button id="addOneFromCart" v-on:click='addToCart(card.card)'>+</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td id="total" colspan="2"><p>Total : {{this.$store.state.total}} $</p></td>
            </tr>
        </table>
        <h2 v-else>No items in your cart</h2>
    </div>
</template>

<script>
export default {
data: function() {
       return {
            cart: this.$store.state.cart,
            hidden: true
        }        
    },
    methods : {
        addToCart: function(cart) {
            this.$store.commit('addToCart', cart);
        },
        removeFromCart: function(cart) {
            this.$store.commit('removeFromCart', cart)
        },
        displayCart: function() {
            this.hidden = !this.hidden;
        }
    }
  }
</script>

<style>
    #panier {
        display: grid;
        position: fixed;
        top: 60px;
        right: 0%;
        bottom: 0px;
        overflow:auto;
        background-color: rgba(52,132,152,1);
        border-radius: 1em;
        border: solid;
        border-block-color: rgba(107,119,141,1);
    }
    
    h2{
        margin: auto;
        padding: 2em;;
    }

    h3 {
        padding: 0px;
        margin: 0px;
    }

    ul {
        list-style-type: none;
        width: 100%;
        position: fixed;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: rgba(32,73,105,1);
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    li {
        float: left;
    }

    li h3 {
        display: block;
        color: white;
        text-align: center;
        padding: 19px 16px;
        text-decoration: none;
    }

    li img {
        display: block;
        color: white;
        text-align: center;
        text-decoration: none;
    }

    li img:hover:not(.active) {
        background-color: #111;
    }

    .active {
        background-color: rgba(52,132,152,1);
    }

    #img {
        padding: 5px;
        margin: 0px;
        display: block;
        max-width:50px;
        max-height:50px;
        width: auto;
        height: auto;
    }
</style>