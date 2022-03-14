import service from '../../network'
import { Account, LoginResult, UserInfoResult } from './types'
import { DataType } from '../types'

// 登录
export const login = (account: Account) => {
  return service.post<DataType<LoginResult>>({
    url: '/login',
    data: account
  })
}

// 获取用户信息
export const getUserInfoById = (id: number) => {
  return service.get<DataType<UserInfoResult>>({
    url: `users/${id}`
  })
}

// 获取用户菜单
export const getUserMenuListByRoleId = (id: number) => {
  return service.get<DataType>({
    url: `/role/${id}/menu`
  })
}
