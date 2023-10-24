import { FormEvent, useContext, useEffect, useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { apiRoot } from '../../app.config'
import InputComponent from '../InputComponent'
import { Toast } from '../Toast'
import { UserContext } from '../../contexts/UserProvider'

export default function DeleteForm() {

  useEffect(() => {
    if (!user.token) {
      navigate('/')
    }
  }, [])


  const navigate = useNavigate()
  const [pageLoading, setPageLoading] = useState(false)
  const usernameField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)
  const { user } = useContext(UserContext)

  async function handleDeleteData(e: FormEvent<HTMLElement>) {
    e.preventDefault()
    setPageLoading(true)
    const res = await fetch(`${apiRoot}/passenger`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token!}`
      },
      body: JSON.stringify({
        username: usernameField.current!.value,
        password: passwordField.current!.value
      })
    })
    setPageLoading(false)
    if (res.ok) {
      console.log('good response')
      Toast('success', 'Deleting was done successfully.')
      const data = await res.json()
      console.log(data)
      navigate('/logout')
    } else if (res.status === 401) {
      // 401 Unauthorized
      Toast('error', 'For the security of your account, please login again.')
      navigate('/logout')
    } else {
      Toast('error', 'An error occurred, please try again.')
      console.log('bad response')
    }
  }

  return (
    <>
      <form className="row g-3" onSubmit={handleDeleteData}>
        <div className="col-md-4">
          <InputComponent name='username' type='text' ref={usernameField} required />
        </div>
        <div className="col-md-4">
          <InputComponent name='password' type='password' ref={passwordField} required />
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit" {...(pageLoading && { disabled: true })}>
            {
              pageLoading ? (
                <div>
                  <span className="spinner-border spinner-border-sm me-1" aria-hidden="true" />
                  <span role="status">Loading...</span>
                </div>

              ) : 'Delete'
            }
          </button>
        </div>
      </form>


      {/* <form onSubmit={handleDeleteData}>
        <label htmlFor="username">Username</label><br />
        <input type="text" name='username' ref={usernameField} required /><br />
        <label htmlFor="password">Password</label><br />
        <input type="password" name='password' ref={passwordField} required /><br />
        <input type="submit" value='Delete' />
      </form> */}
    </>
  )
}
