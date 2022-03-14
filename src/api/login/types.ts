export interface Account {
  name: string
  password: string
}

export interface LoginResult {
  id: number
  name: string
  token: string
}

export interface UserInfoResult {
  cellphone: number
  createAt: string
  department: {
    createAt: string
    id: number
    leader: string
    name: string
    parentId: any
    updateAt: string
  }
  enable: number
  id: number
  name: string
  realname: string
  role: {
    createAt: string
    id: 1
    intro: string
    name: string
    updateAt: string
  }
  updateAt: string
}
