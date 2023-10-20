import { useEffect, useState } from "react"
import { Post } from "../types";
import { Container, Spinner } from "react-bootstrap";

export default function Posts( { username } : { username: string | boolean }) {

  const [posts, setPosts] = useState<Array<Post>>([])
  useEffect(()=>{
    console.log('in effect');
    getPosts()
  },[])

  async function getPosts(){
    const endpoint = username ? `user/${username}` : 'post/'
      const res = await fetch(`https://fakebook-matrix-130.onrender.com/${endpoint}`,{
        method:"GET",
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
      })
      if(res.ok){
        const postsData = await res.json()
        setPosts(username? postsData.posts : postsData)
      } else console.log('bad request')
  }


  return (
    <Container>
      
      { posts.length > 0 ?
        posts.map((post:Post, i:number) => <p key={i}>{post.body}</p>) :
        <Spinner />
        }
      
    </Container>
  )
}
