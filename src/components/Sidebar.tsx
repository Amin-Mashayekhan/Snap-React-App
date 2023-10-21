// import { Link, NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';
// import Nav from 'react-bootstrap/esm/Nav'
// import { Navbar } from 'react-bootstrap'
import { UserContext } from '../contexts/UserProvider';
import logo from './../assets/images/logo.jpg';
import { useContext } from 'react';

export default function Sidebar() {

  const { user } = useContext(UserContext)

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="navbar-brand">
        <img className='rounded-circle' src={logo} alt='snap taxi' />
      </div>
      <div className="navbar-toggler">
        <span className="navbar-toggler-icon" />
      </div>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-itam">
            <Link to='/' className="nav-link" >Home</Link>
          </li>
          <li className="nav-itam">
            <Link to={`/user/${user.username}`} className="nav-link" >My Page</Link>
          </li>
          <li className="nav-itam">
            <Link to='/users' className="nav-link" >All Users</Link>
          </li>
          <li className="nav-itam">
            <Link to='/feed' className="nav-link" >Posts</Link>
          </li>
        </ul>
      </div>
    </nav>
    // <Navbar sticky='top' className='flex-column sidebar'>
    //   <Nav.Item>
    //     <Nav.Link as={NavLink} to='/'>Matrix Page</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link as={NavLink} to={`/user/${user.username}`}>My Page</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link as={NavLink} to='/users'>All Users</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link as={NavLink} to='/feed'>Posts</Nav.Link>
    //   </Nav.Item>
    // </Navbar>
  )
}
