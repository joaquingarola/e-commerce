import React, { useContext } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import logo from '../../imagenes/logo.png';
import CartWidget from '../CartWidget/CartWidget.js'
import './NavBar.css';

const NavBar = () => {
  const categories = ['Buzos', 'Remeras', 'Pantalones']
  const { cartListItem, cartTotalQuantity } = useContext(CartContext);

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
        <div style={{width:'10%', height:'40px', position:'relative'}}>
          {
            cartListItem.length > 0 && 
              <Navbar.Brand as={Link} to='/cart' className='p-0'> 
                <CartWidget /> 
                <div className='cart-count-container'>
                  <p className='cart-count'>{cartTotalQuantity}</p>
                </div>
              </Navbar.Brand>
          }
        </div>
      </Container>
    </Navbar>
  );
}


export default NavBar;