import { FormEvent, useRef } from "react"

export default function PostForm() {

  const postField = useRef<HTMLTextAreaElement>(null)

  async function makePost(e: FormEvent<HTMLElement>) {
    e.preventDefault()
    const res = await fetch('http://127.0.0.1:5000/post/', {
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
      console.log(data)
    } else console.log('bad request')
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
