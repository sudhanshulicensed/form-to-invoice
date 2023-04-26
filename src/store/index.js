import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
  },
  getters: {
  },
  mutations: {
    SET_USER_TOKEN(state, token) {
      state.token = token
    }
  },
  actions: {
    getToken ({commit}, payload) {
      const token = function (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
      }
      const encodedToken = payload;
      const decodedToken = token(encodedToken)
      commit('SET_USER_TOKEN', decodedToken)
    },
  },
})
