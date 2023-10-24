import { FormEvent, useRef } from "react"
import { apiRoot } from "../../app.config"
import { useNavigate } from "react-router-dom"
import { Toast } from "../Toast";

export default function PostForm() {

  const postField = useRef<HTMLTextAreaElement>(null)
  const navigate = useNavigate();

  async function makePost(e: FormEvent<HTMLElement>) {
    e.preventDefault()
    const res = await fetch(`${apiRoot}/post/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        body: postField.current!.value
      })
    })
    if (res.ok) {
      const data = res.json()
      Toast('success', 'Addition was done successfully.')
      console.log(data)
    } else if (res.status === 401) {
      // 401 Unauthorized
      Toast('error', 'For the security of your account, please login again.')
      navigate('/logout')
    } else Toast('error', 'An error occurred, please try again.')
  }

  return (
    <>
      <form className="row g-3" onSubmit={makePost}>
        <div className="col-md-4">
          <label htmlFor="post" className="form-label">post</label>
          <textarea name="post" id="post" ref={postField} placeholder="What's on your mind?" required></textarea>
        </div>

        <div className="col-12">
          <input className="btn btn-primary" type="submit" value='Post' />
        </div>
      </form>
      {/* <form onSubmit={makePost}>
        <input type="text" name='post' ref={postField} placeholder="What's on your mind?" required />
        <input type="submit" value='Post' />
      </form> */}
    </>
  )
}
