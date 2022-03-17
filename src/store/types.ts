import { LoginState } from './login/types'

export interface RootState {
  token: string
  userInfo: any
  aliveMenus: any[]
}

export interface RootWithModule {
  login: LoginState
}

export type StoreType = RootState & RootWithModule
