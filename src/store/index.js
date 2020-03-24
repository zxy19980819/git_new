import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    add1(state){
      state.count++

    }
  },
  actions: {
  },
  modules: {
  },
getters:{

}
})
