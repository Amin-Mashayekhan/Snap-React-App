import { FormEvent, useContext, useEffect, useRef } from 'react'

import { UserContext } from '../../contexts/UserProvider'
import { UserDetailsType } from '../../types'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
  const navigate = useNavigate()
  const { setUser, user } = useContext(UserContext)
  console.log("🚀 ~ file: LoginForm.tsx:10 ~ LoginForm ~ user:", user)

  const usernameField = useRef<HTMLInputElement>(null)
  const emailField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/')
    }
  }, [])

  function handleLoginData(e: FormEvent<HTMLElement>) {
    e.preventDefault()
    const loginInfo: Partial<UserDetailsType> = {
      password: passwordField.current!.value
    }
    if (usernameField.current?.value) {
      loginInfo.username = usernameField.current.value
    } else if (emailField.current?.value) {
      loginInfo.email = emailField.current.value
    } else {
      window.alert('Please include Username or Email')
      return
    }
    clearForm()
    loginUser(loginInfo)
    navigate('/')
  }

  async function loginUser(loginInfo: Partial<UserDetailsType>) {
    const res = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginInfo)
    })
    if (res.ok) {
      const data = await res.json()
      const accessToken = data.access_token
      setUser({
        token: accessToken,
        username: loginInfo.username ? loginInfo.username : ''
      })
      localStorage.setItem('token', accessToken)
    } else window.alert('Failed Login')
  }

  function clearForm() {
    usernameField.current!.value = ''
    emailField.current!.value = ''
    passwordField.current!.value = ''
  }

  return (
    <>
      <form className="row g-3" onSubmit={handleLoginData}>
        <div className="col-md-4">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" name='username' id="username" ref={usernameField} />
        </div>
        <div className="col-md-4">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" name='email' id="email" ref={emailField} />
        </div>
        <div className="col-md-4">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' id="password" ref={passwordField} required />
        </div>

        <div className="col-12">
          <input className="btn btn-primary" type="submit" value='Login' />
        </div>
      </form>

    {/* <button type='button' onClick={() => setUser({token: "login", username: "login"})}>setUser</button> */}



      {/* <form onSubmit={handleLoginData}>
        <label htmlFor="username">Username</label><br />
        <input type="text" name='username' ref={usernameField} /><br />
        <label htmlFor="email">Email</label><br />
        <input type="text" name='email' ref={emailField} /><br />
        <label htmlFor="password">Password</label><br />
        <input type="password" name='password' ref={passwordField} required /><br />
        <input type="submit" value='Login' />
      </form> */}
    </>
  )
}
