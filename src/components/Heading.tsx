import { useContext, useEffect } from 'react';
import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/esm/Container';
import { NavLink } from 'react-router-dom'
import { UserContext } from '../contexts/UserProvider';

export default function Heading(): JSX.Element {
  const { user } = useContext(UserContext)

  useEffect(()=>{
    if (localStorage.getItem('token') && !user.token){
      user.token = localStorage.getItem('token')!
    }
  },[user])

  return (
    <>
      <Navbar sticky='top' data-bs-theme='dark' className='header'>
        <Container>
        <Navbar.Brand as={NavLink} to='/'>Matrix Social</Navbar.Brand></Container>
        { !localStorage.getItem('token') ?
        <>
          <Nav.Item>
            <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to='/register'>Register</Nav.Link>
          </Nav.Item> 
        </> :
        <>
          <Nav.Item>
            <Nav.Link as={NavLink} to='/delete-user'>Delete Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to='/edit-user'>Edit Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to='/logout'>Logout</Nav.Link>
          </Nav.Item>
        </>
        }
      </Navbar>
    </>
  );
}
