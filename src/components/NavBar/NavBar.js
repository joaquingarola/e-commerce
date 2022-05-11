import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import './NavBar.css'

const NavBar = () => {
  return(
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#Inicio">Rosario Sport</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" fill variant="tabs" defaultActiveKey="#Inicio">
            <Nav.Link href="#Inicio">Inicio</Nav.Link>
            <Nav.Link href="#Productos">Productos</Nav.Link>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
            <Nav.Link href="#FAQ">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;