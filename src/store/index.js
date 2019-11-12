import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    historySearch: []
  },
  getters: {
    getHistorySearch(state) {
      return state.historySearch
    }
  },
  mutations: {
    addHistorySearch(state,val) {
      state.historySearch.push(val)
    },
    clearHistorySearch(state) {
      state.historySearch.length = 0
    }
  },
  actions: {

  },
  modules: {

  }
});
