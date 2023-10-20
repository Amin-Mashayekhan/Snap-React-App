import { useEffect, useState } from "react"
import { Post } from "../types";
import { Container, Spinner } from "react-bootstrap";

export default function Posts() {

  const [posts, setPosts] = useState<Array<Post>>([])

  useEffect(()=>{
    console.log('in effect');
    getPosts()
  },[])

  async function getPosts(){
    console.log('in async')
      const res = await fetch('https://fakebook-matrix-130.onrender.com/post/',{
        method:"GET",
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
      })
      if(res.ok){
        const postsData = await res.json()
        console.log(postsData)
        setPosts(postsData)
      } else console.log('bad request')
  }


  return (
    <Container>
      
      { posts.length > 0 ?
        posts.map((post:Post) => <p>{post.body}</p>) :
        <Spinner />
        }
      
    </Container>
  )
}
