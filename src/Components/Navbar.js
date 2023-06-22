import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Resume from '../Files/Kevin_Wong_Resume.pdf';

const NavbarBS = () => {
    return (
      <Navbar id="nav" collapseOnSelect expand="lg" bg="green" variant="dark" style={{backgroundColor: "#101909"}}>
        <Navbar.Brand style={{color: "white"}}>Kevin Wong</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: "white"}}/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ml-auto" >
            <Nav.Link href="#about" className="ml-auto" style={{color: "white"}}>About </Nav.Link>
            <Nav.Link href="#skills" className="ml-auto" style={{color: "white"}}>Skills</Nav.Link>
            <Nav.Link href="#projects" className="ml-auto" style={{color: "white"}}>Projects</Nav.Link>
            <Nav.Link href={Resume} target="_blank" rel="noopener noreferrer" className="ml-auto" style={{color: "white"}}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavbarBS;
