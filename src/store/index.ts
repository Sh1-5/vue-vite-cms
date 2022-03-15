import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { RootState, StoreType } from './types'
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

export function useStore(): Store<StoreType> {
  return useVuexStore()
}

export default store
