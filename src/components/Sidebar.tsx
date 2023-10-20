import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/esm/Nav'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <Navbar sticky='top' className='flex-column sidebar'>
      <Nav.Item>
        <Nav.Link as={NavLink} to='/'>My Page</Nav.Link>
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
