import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/esm/Nav'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../contexts/UserProvider'
import { useContext } from 'react'

export default function Sidebar() {

  const { user } = useContext(UserContext)
  
  return (
    <Navbar sticky='top' className='flex-column sidebar'>
      <Nav.Item>
        <Nav.Link as={NavLink} to={`/user/${user.username}`}>My Page</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to='/'>Matrix Page</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to='/users'>All Users</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to='/feed'>Posts</Nav.Link>
      </Nav.Item>
    </Navbar>
  )
}
