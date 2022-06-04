import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../imagenes/logo.png';
import CartWidget from '../CartWidget/CartWidget.js'
import './NavBar.css';

const NavBar = () => {
  const categories = ['Buzos', 'Remeras', 'Pantalones']

  return(
    <Navbar bg="light" expand="lg" className='pb-0'>
      <Container>
        <Navbar.Brand href="#Inicio" className='p-0' as={Link} to='/'><img src={logo} alt='Foto logo' className='logo-principal'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0'>
          <Nav className="ms-auto border-bottom-0" fill variant="tabs">
            <Nav.Link as={Link} to='/'> Inicio </Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              {categories.map( (cat) => {
                return <NavDropdown.Item as={Link} to={`/category/${cat}`} key={cat}>{cat}</NavDropdown.Item>   
              })}
            </NavDropdown>
            <Nav.Link as={Link} to='/Contacto' >Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand as={Link} to='/cart' className='p-0'> <CartWidget /> </Navbar.Brand>
      </Container>
    </Navbar>
  );
}


export default NavBar;