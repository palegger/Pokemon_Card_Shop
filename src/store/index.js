import { createStore } from "vuex";
import mutation from '../store/mutation'
import states from '../store/state'

const store = createStore({
  state: states,
  mutations: mutation
});

export default store

