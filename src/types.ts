export type LoggedUserDetailsType = {
  token: string
  username: string
}

export type UserDetailsType = {
  readonly id?: string 
  username: string
  email: string
  password: string
  // new_password?: string
  phone_number: string
  first_name?: string
  last_name?: string
}

export type UserProfileDetailsType = UserDetailsType & {
  requests: PostDetailsType[]
}

export type PostDetailsType = {
  "id": string
  "pickup": string
  "dropoff": string
  "number_of_passengers": string
  "number_of_luggages": string
  "passenger_id": number
  "date_time": string
}