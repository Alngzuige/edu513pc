import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginDialogVisible:false
  },
  getters:{
    changeLoginDialogVisible(state){
      return state.loginDialogVisible = true
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
