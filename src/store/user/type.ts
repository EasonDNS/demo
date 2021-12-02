interface IuserState {
  userList: useritem[]
  userName?: string
  userTotal: number
}

interface useritem {
  id: number
  name: string
  cellphone: string
  enable: number
  departmentId?: number
  realname?: string
  roleId?: number
  createAt?: Date
  updateAt?: Date
}

export { IuserState }
