// import { Link, NavLink } from 'react-router-dom'

import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserProvider';
import logo from './../assets/images/logo.jpg';
import { useContext, useState } from 'react';

// import Nav from 'react-bootstrap/esm/Nav'
// import { Navbar } from 'react-bootstrap'




export default function Sidebar() {

  const { user } = useContext(UserContext)
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar w/ text</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <span className="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </nav> */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="navbar-brand">
          <img className='rounded-circle' src={logo} alt='snap taxi' />
        </div>
        {
          user.token && (
            // <div className="navbar-toggler">
            //   <span className="navbar-toggler-icon" />
            // </div>
            <button onClick={() => setIsNavbarOpen(prevState => !prevState)} className={`navbar-toggler ${!isNavbarOpen && 'collapsed'}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded={`${isNavbarOpen ? "true" : "false"}`} aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
          )
        }
        <div className={`collapse navbar-collapse ${isNavbarOpen && 'show'}`} id="navbarResponsive">
          <ul className="navbar-nav w-100">
            {
              user.token && (
                <>
                  <li className="nav-item">
                    <Link to='/' className="nav-link" >Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={`/user/${user.username}`} className="nav-link" >My Page</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/users' className="nav-link" >Other Passengers</Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link to='/feed' className="nav-link" >Posts</Link>
                  </li> */}
                  <li className="nav-item">
                    <Link to='/country' className="nav-link" >Country (API)</Link>
                  </li>
                </>
              )
            }
            <li className="nav-item d-flex align-items-end ms-auto">
              {
                user.token ? (
                  <Link to='/logout' className=" btn btn-outline-light" >Logout</Link>
                ) : (
                  <Link to='/login' className=" btn btn-outline-light" >Signing</Link>
                )
              }
            </li>
          </ul>
        </div>
      </nav>
    </>
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
