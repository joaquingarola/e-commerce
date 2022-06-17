import { Modal, Form, Button } from 'react-bootstrap';
import { useState, useContext } from 'react';
import CartContext from '../../context/CartContext';
import './CartModalForm.css';

const CartModalForm = ({ handleClose, formValue, setFormValue, showModal, saveData}) => {
  const { cartListItem, totalPrice } = useContext(CartContext);
  const [validated, setValidated] = useState(false);
  const order = {
    items: cartListItem.map((item) => {
      return{
        id: item.id,
        title: item.title,
        price: item.price,
        color: item.color,
        size: item.size,
        quantity: item.quantity
      }
    }),
    total: totalPrice
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      saveData({...order, buyer: formValue});
    }
    setValidated(true);
  };

  const handleChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value});
  };

  return(
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Finalizar compra</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control 
              required
              type="text" 
              name='name'
              placeholder="Ingrese su nombre y apellido" 
              value={formValue.name}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">Debe completar este campo</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              required
              type='email' 
              name='email'
              placeholder="Ingrese su email" 
              value={formValue.email}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              Nunca compartiremos tu email con alguien más.
            </Form.Text>
            <Form.Control.Feedback type="invalid">Debe completar con un email válido</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control 
              required
              type="number" 
              name='phone'
              placeholder="Ingrese su teléfono"
              value={formValue.phone}
              onChange={handleChange} 
            />
            <Form.Control.Feedback type="invalid">Debe completar este campo</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicButton" style={{display: 'flex', justifyContent:'flex-end'}}>
            <Button variant="secondary" onClick={handleClose} style={{marginRight: '10px'}}>
              Cancelar
            </Button>
            <Button variant="dark" type='submit'>
              Finalizar compra
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  )
};

export default CartModalForm;