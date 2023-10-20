import { useRef, FormEvent, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { User } from '../../types'
import { UserContext } from '../../contexts/UserProvider'

export default function LoginForm() {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)
  
  const usernameField = useRef<HTMLInputElement>(null)
  const emailField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/')
    }
  },[])
  
  function handleLoginData(e:FormEvent<HTMLElement>){
    e.preventDefault()
    const loginInfo: Partial<User> = {
      password : passwordField.current!.value
    }
    if(usernameField.current?.value){
      loginInfo.username =  usernameField.current.value
    } else if( emailField.current?.value) {
      loginInfo.email = emailField.current.value
    } else {
      window.alert('Please include Username or Email')
      return
    }
    clearForm()
    loginUser(loginInfo)
    navigate('/')
  }

  async function loginUser(loginInfo: Partial<User>){
    const res = await fetch('http://127.0.0.1:5000/login',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginInfo)
    })
    if(res.ok){
      const data = await res.json()
      const accessToken = data.access_token
      setUser({
        token: accessToken, 
        username: loginInfo.username ? loginInfo.username : ''
    })
      localStorage.setItem('token', accessToken)
    } else window.alert('Failed Login')
  }

  function clearForm(){
    usernameField.current!.value = ''
    emailField.current!.value = ''
    passwordField.current!.value = ''
  }

  return (
    <form onSubmit={handleLoginData}>
      <label htmlFor="username">Username</label><br/>
      <input type="text" name='username' ref={usernameField}/><br/>
      <label htmlFor="email">Email</label><br/>
      <input type="text" name='email' ref={emailField}/><br/>
      <label htmlFor="password">Password</label><br/>
      <input type="password" name='password' ref={passwordField} required/><br/>
      <input type="submit" value='Login' />
    </form>
  )
}
