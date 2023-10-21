export type LoggedUserDetailsType = {
  token: string
  username: string
}

export type UserDetailsType = {
  readonly id?: string
  username: string
  password: string
  email: string
  first_name?: string
  last_name?: string
}

export type Post = {
  id: string
  timestamp: Date
  user_id: number
  body: string
}