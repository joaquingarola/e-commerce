import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import { Button, Modal, Form } from 'react-bootstrap';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import db from '../../utils/firebaseConfig';
import './CartModal.css';

const CartModal = ( { showModal, handleClose } ) => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const { cartListItem, totalPrice, clearCart } = useContext(CartContext);
  const [success, setSuccess] = useState(0);
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [order, setOrder] = useState({
    buyer: {},
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
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      saveData({...order, buyer: formValue});
    }
    /* setOrder({...order, buyer: formValue}); */
    setValidated(true);
  };

  const handleChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value});
  };

  const saveData = async (newOrder) => {
    const orderFirebase = collection(db, 'ordenes');
    const orderDoc = await addDoc(orderFirebase, newOrder);
    setSuccess(orderDoc.id);
  };

  const finishBuy = () => {
    clearCart();
    navigate('/Productos');
  };
 

  return (
    <>
      {success ? (
        <Modal show={showModal} onHide={finishBuy} style={{borderRadius: '30px', border: '1px solid grey'}}>
          <div className='container-ticket'>
            <div className="wrapper"> 
              <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> 
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> 
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
            </div>
            <h4 style={{textAlign: 'center', margin:'10px'}}>Su compra ha sido procesada con éxito.</h4>
            <div style={{textAlign: 'center', margin: '20px 0'}}>
              <p><span style={{fontWeight: '500'}}>Nro de orden:</span> {success}</p>
              <p><span style={{fontWeight: '500'}}>Valor total:</span> ${order.total}</p>
              <p><span style={{fontWeight: '500'}}>Comprador:</span> {formValue.name}</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Button
                variant='dark' 
                style={{borderRadius: '20px', marginBottom: '20px', width:'25%', height:'40px !important'}}
                onClick={finishBuy}>
                  Cerrar
              </Button>
            </div>
          </div>
        </Modal>
      ) : (
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
      )} 
    </>
  );
}

export default CartModal;