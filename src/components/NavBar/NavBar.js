import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../imagenes/logo.png';
import Cart from '../Cart/Cart.js'
import './NavBar.css';

const NavBar = () => {
  return(
    <Navbar bg="light" expand="lg" className='pb-0'>
      <Container>
        <Navbar.Brand href="#Inicio" className='p-0'><img src={logo} alt='Foto logo' className='logo-principal'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0'>
          <Nav className="ms-auto border-bottom-0" fill variant="tabs" defaultActiveKey="#Inicio">
            <Nav.Link href="#Inicio">Inicio</Nav.Link>
            <Nav.Link href="#Productos">Productos</Nav.Link>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
            <Nav.Link href="#FAQ">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#Cart" className='p-0'> <Cart /> </Navbar.Brand>
      </Container>
    </Navbar>
  );
}


export default NavBar;