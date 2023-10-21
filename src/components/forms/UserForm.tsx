import { FormEvent, useEffect, useRef } from 'react'

import { UserDetailsType } from '../../types'
import { useNavigate } from 'react-router-dom'

export default function UserForm({ edit }: { edit: boolean }) {

  const navigate = useNavigate()
  const usernameField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)
  const emailField = useRef<HTMLInputElement>(null)
  const fNameField = useRef<HTMLInputElement>(null)
  const lNameField = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!edit && localStorage.getItem('token')) {
      navigate('/')
    }
  }, [])


  async function handleRegisterData(e: FormEvent<HTMLElement>) {
    e.preventDefault()

    const user: UserDetailsType = {
      username: usernameField.current!.value,
      password: passwordField.current!.value,
      email: emailField.current!.value,
    }
    if (fNameField.current!.value) {
      user.first_name = fNameField.current?.value
    }
    if (lNameField.current!.value) {
      user.last_name = lNameField.current?.value
    }
    clearFormData()
    await registerUser(user)
  }

  async function registerUser(user: UserDetailsType) {
    const endpoint = edit ? 'user' : 'register'
    const res = await fetch(`http://127.0.0.1:5000/${endpoint}`, {
      method: edit ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')!}`
      },
      body: JSON.stringify(user)
    })
    const data = await res.json()
    console.log(data)
    if (!res.ok) {
      window.alert('Register Failed')
    } else navigate('/login')
  }

  function clearFormData() {
    usernameField.current!.value = ''
    emailField.current!.value = ''
    passwordField.current!.value = ''
    fNameField.current!.value = ''
    lNameField.current!.value = ''
  }

  return (
    <div>
      <form className="row g-3" onSubmit={handleRegisterData}>
        <div className="col-md-4">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" name='email' id="email" defaultValue="Otto" ref={usernameField} required />
        </div>
        <div className="col-md-4">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" name='username' id="username" defaultValue="Otto" ref={emailField} required />
        </div>
        <div className="col-md-4">
          <label htmlFor="first-name" className="form-label">First name</label>
          <input type="text" className="form-control" name='first-name' id="first-name" defaultValue="Mark" ref={fNameField} />
        </div>
        <div className="col-md-4">
          <label htmlFor="last-name" className="form-label">Last name</label>
          <input type="text" className="form-control" name='last-name' id="last-name" defaultValue="Otto" ref={lNameField} />
        </div>
        <div className="col-md-4">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' id="password" defaultValue="Otto" ref={passwordField} required />
        </div>

        <div className="col-12">
          <input className="btn btn-primary" type="submit" value={edit ? 'Edit' : 'Register'} />
        </div>
      </form>

      {/* <form onSubmit={handleRegisterData}>
        <label htmlFor="username">Username</label><br />
        <input type="text" name='username' ref={usernameField} required /><br />
        <label htmlFor="email">Email</label><br />
        <input type="text" name='email' ref={emailField} required /><br />
        <label htmlFor="first-name">First Name</label><br />
        <input type="text" name='first-name' ref={fNameField} /><br />
        <label htmlFor="last-name">LastName</label><br />
        <input type="text" name='last-name' ref={lNameField} /><br />
        <label htmlFor="password">Password</label><br />
        <input type="password" name='password' ref={passwordField} required /><br />
        <input type="submit" value={edit ? 'Edit' : 'Register'} />
      </form> */}
    </div>
  );
}
