import { LoginState } from './login/types'

export interface RootState {
  token: string
  userInfo: any
}

export interface RootWithModule {
  login: LoginState
}

export type StoreType = RootState & RootWithModule
