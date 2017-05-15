import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    authenticated: 0
  },
  actions: {

  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {

  }
})

export default store
