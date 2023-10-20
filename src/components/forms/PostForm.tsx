import { FormEvent, useRef } from "react"

export default function PostForm() {

  const postField = useRef<HTMLInputElement>(null)

  async function makePost(e:FormEvent<HTMLElement>){
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
    if(res.ok){
      const data = res.json()
      console.log(data)
    }else console.log('bad request')
  }

  return (
    <form onSubmit={makePost}>
      <input type="text" name='post' ref={postField} placeholder="What's on your mind?" required/>
      <input type="submit" value='Post' />
    </form>
  )
}
