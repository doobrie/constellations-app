import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: '',
    constellations: require(`../assets/constellations.json`)
  },
  mutations: {
    selectConstellation(state, abbreviation) {
      state.selected = abbreviation
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    selectedConstellation(state) {
      return state.constellations.find(constellation => {
        return (constellation.value == state.selected);
      })
    }
  }
})