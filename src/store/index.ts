import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { RootState, StoreType } from './types'
import login from './login'

const store = createStore<RootState>({
  state: () => {
    return {
      token: '',
      userInfo: {},
      aliveMenus: [
        {
          children: null,
          id: 39,
          name: '核心技术',
          parentId: 38,
          sort: 106,
          type: 2,
          url: '/main/analysis/overview'
        }
      ]
    }
  },
  getters: {},
  mutations: {
    addToAliveMenus: (state, menu) => {
      if (menu.id !== 39 && !state.aliveMenus.includes(menu))
        state.aliveMenus.push(menu)
    },
    removeFromAliveMenus: (state, index) => {
      state.aliveMenus.splice(index, 1)
    }
  },
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
