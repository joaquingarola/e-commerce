import { Form, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import { send } from 'emailjs-com';

const ContactForm = ({ handleShow, handleLoader, Loader }) => {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      
      handleShow();
      send(
        'contact_service2',
        'template_hw28o5b',
        formValue,
        '6FH82rQxIzYDxkGxR'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          handleLoader();
        })
        .catch((err) => {
          console.log('Error...', err);
        });
    }
    setValidated(true);
  };

  const handleChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value});
  };
  

  return(
    <Form noValidate validated={validated} onSubmit={handleSubmit} style={{padding: '20px'}}>
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
        <Form.Label>Mensaje</Form.Label>
        <Form.Control 
          as="textarea" 
          required
          name = 'message'
          placeholder='Escriba su mensaje aquí' 
          value={formValue.message}
          onChange={handleChange} 
        />
        <Form.Control.Feedback type="invalid">Debe completar este campo</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicButton" style={{display: 'flex', justifyContent:'center'}}>
        <Button variant="dark" type='submit'>
          Enviar
        </Button>
      </Form.Group>
    </Form>
  );
};

export default ContactForm;