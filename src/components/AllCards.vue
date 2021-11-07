<template>
  <div>
    <div class="AllCards">
      <div class="card" v-for="card in cards" :key="card.id">
        <h2>{{card.name}}</h2>
        <img :src="card.images.small">
        <p>{{card.cardmarket.prices.avg1}} $</p>
        <button v-on:click="addToCart(card)">Add to cart</button>
      </div>
    </div>
    <div id="pageManagement">
      <button id="previousPage" v-on:click='previousPage()'>Previous page</button>
      {{this.page}}
      <button id="nextPage" v-on:click='nextPage()'>Next page</button>
    </div>
  </div>
</template>

<script scope>
import axios from 'axios'

export default {
  data: function() {
       return {
            cards: null,
            cart: this.$store.state.cart,
            page: 1,
            pageSize: 25
        }
    },
    methods: {
        getAllCards: function () {
            axios.get('https://api.pokemontcg.io/v2/cards?page=' + this.page + '&pageSize=' + this.pageSize)
            .then(resp => {
              this.cards = resp.data.data;
            })
            .catch(function (error) {
                console.log(error);
            });
      },
      addToCart: function(cart) {
        cart.amount = 1;
        this.$store.commit('addToCart', cart);
      },
      previousPage: function() {
        if(this.page - 1 >= 1) {
          this.page -= 1;
          this.getAllCards();
        }
      },
      nextPage: function() {
        this.page += 1;
        this.getAllCards();
      }
    },

    beforeMount() {
        this.getAllCards();
    }
  }
</script>

<style>
  #pageMnagement {
    text-align: center;
  }

  @media screen and (min-width: 780px){
    .AllCards {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: 1200px){
    .AllCards {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @media screen and (min-width: 1550px){
    .AllCards {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }

  .card {
    background-color: rgba(218,218,218,1);
    border-radius: 0.5em;
    margin: 1em;
  }

  p {
    margin: 1em;
  }
  
  button {
    margin: 1em;
  }
</style>