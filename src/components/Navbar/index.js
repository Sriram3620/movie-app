import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';

import "./index.css"

function NavScrollExample({ onSearch }) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.trim()) {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError('Search input cannot be empty');
      return;
    }
    setError('');
  
    onSearch(query);
  };

  return (
    <Navbar  expand="lg"   style={{backgroundColor:"black",color:"white",opacity:"0.8",width:"99vw"}} className="bg-body-tertiar sticky-top">
      <Container fluid>
        <Navbar.Brand color='white' style={{color:"white",fontSize:"30px"}} href="#"><img alt='logo' className='logo' src='https://officialpsds.com/imageview/7v/p8/7vp8kp_large.png?1521316499' /></Navbar.Brand>
        
        <Navbar.Toggle style={{color:"",backgroundColor:'white',marginRight:"10px"}} color='white' aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link  className='nav-home' style={{color:"white",paddingLeft:"10px"}} href="#action1">Home</Nav.Link>
            <Nav.Link className='nav-home' style={{color:"white"}} href="#action2">Features</Nav.Link>
            <Nav.Link className='nav-home' style={{color:"white"}} href="#action2">About</Nav.Link>
            <Nav.Link className='nav-home' style={{color:"white"}} href="#action2">Contact Us</Nav.Link>
            {/* <NavDropdown style={{color:"white"}} title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item style={{color:"white"}} href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <div>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleInputChange}
            />
          
          {error !=="" && <p className='err-msg'>{error}!!!</p>}
            </div>
            <Button className='searchbtn' onClick={handleSubmit} variant="outline-success">Search</Button>
            
          </Form>
           
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;