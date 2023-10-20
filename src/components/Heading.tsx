import { FormEvent, useContext, useEffect, useRef } from 'react';
import { Button, Col, Form, Navbar, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/esm/Container';
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserProvider';

export default function Heading(): JSX.Element {
  const { user } = useContext(UserContext)
  const userSearchField = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

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
        <Form /* inline */ onSubmit={(e:FormEvent<HTMLElement>) => {
            e.preventDefault()
            navigate(`/user/${userSearchField.current!.value}`)
          }}>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                ref= {userSearchField}
                required
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Search</Button>
            </Col>
          </Row>
        </Form>
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
