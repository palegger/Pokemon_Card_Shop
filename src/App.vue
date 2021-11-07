<template>
  <Navbar />
  <img id='logo' alt="Vue logo" src="/honor-ball.png">
  <h1>Pokemon Card Shop</h1>
  <AllCards />
</template>

<script>
import AllCards from './components/AllCards.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    AllCards
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  body {
    margin: 0px;
    background-color: rgba(255,247,247,1);
    color: rgba(91,209,215,1);
  }

  #logo {
    margin-top: 70px;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-family: 'Roboto', sans-serif;
  }

  #app p {
    font-size: 1.5em;
  }

  #app button {
    box-shadow:inset 0px 1px 0px 0px #ffffff;
    background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
    background-color:#f9f9f9;
    border-radius:6px;
    border:1px solid #dcdcdc;
    display:inline-block;
    cursor:pointer;
    color:#666666;
    font-family:Arial;
    font-size:15px;
    font-weight:bold;
    padding:6px 24px;
    text-decoration:none;
    text-shadow:0px 1px 0px #ffffff;
  }

  #app button:hover {
    background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
    background-color:#e9e9e9;
  }

  #app button:active {
    position:relative;
    top:1px;
  }

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
</style>
