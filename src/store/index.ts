import { createStore } from 'vuex'
import { RootState } from './types'
import login from './login'

const store = createStore<RootState>({
  state: () => {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export const setStore = () => {
  store.dispatch('login/loadLocalLogin')
}

export default store
