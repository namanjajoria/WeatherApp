import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Outlet } from 'react-router-dom';
import API from './API.css'
function Golmal() {
  return (
    <div>
       <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="/" className='text-light fw-bold fs-5'><i>Flipkart</i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <input type={'text'} placeholder='Search for products, brands and more' className='box4 me-5 mt-1'></input>
           <button type={'button'} className='btn btn-light button d-flex align-items-center mt-2 justify-content-center  text-primary fw-bold me-5'>Login</button>
           <h5 className='text-light fw-bold mt-2 me-5 mt-2' style={{cursor:'pointer'}}>Become a Seller</h5>
            <NavDropdown title="More" id="basic-nav-dropdown" className='text-light'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Cart" className='text-light fw-bold ms-5 fs-5'>Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </div>
  )
}

export default Golmal

