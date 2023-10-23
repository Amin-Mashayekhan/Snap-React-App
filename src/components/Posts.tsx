import { useEffect, useState } from "react"
import { PostDetailsType } from "../types";
import {  Spinner } from "react-bootstrap";
import Body from "./Body";
import { apiRoot } from "../app.config";
import { useNavigate } from "react-router-dom";

export default function Posts( { username } : { username: string | boolean }) {

  const [posts, setPosts] = useState<Array<PostDetailsType>>([] as Array<PostDetailsType>)

  useEffect(()=>{
    console.log('in effect');
    getPosts()
  },[])
  const navigate = useNavigate()

  async function getPosts(){
    const endpoint = username ? `user/${username}` : 'post/'
      const res = await fetch(`https://fakebook-matrix-130.onrender.com/${endpoint}`,{
        method:"GET",
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
      })
      if(res.ok){
        const postsData = await res.json()
        setPosts(username? postsData.posts : postsData)
      } else if (res.status === 401) {
        // 401 Unauthorized
        navigate('/logout')
      } else console.log('bad request')
  }


  return (
    <Body sidebar>
      
      { posts.length > 0 ?
        posts.map((post:PostDetailsType, i:number) => <p key={i}>{post.pickup}</p>) :
        <Spinner className="mx-auto" />
        }
      
    </Body>
  )
}
