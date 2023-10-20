import { useParams } from "react-router-dom"
import Body from "../components/Body"
import Posts from "../components/Posts"

export default function UserPage() {

  const { username } = useParams()

  return (
    <Body sidebar>
      <h2>{username}'s Page</h2>
      <Posts username={username!}/>
    </Body>
  )
}
