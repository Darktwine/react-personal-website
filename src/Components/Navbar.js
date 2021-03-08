import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavbarBS = () => {
    return (
      <Navbar bg="green" expand="lg" style={{backgroundColor: "#101909"}}>
        <Navbar.Brand href="#home" style={{color: "white"}}>Kevin Wong</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about" className="ml-auto" style={{color: "white"}}>About </Nav.Link>
            <Nav.Link href="#skills" className="ml-auto" style={{color: "white"}}>Skills</Nav.Link>
            <Nav.Link href="#projects" className="ml-auto" style={{color: "white"}}>Projects</Nav.Link>
            <Nav.Link href="#" className="ml-auto" style={{color: "white"}}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavbarBS;
