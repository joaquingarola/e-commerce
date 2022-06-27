import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { GrMailOption, GrMapLocation, GrPhone } from 'react-icons/gr';
import ContactForm from '../ContactForm/ContactForm.js';
import ContactModal from '../ContactModal/ContactModal.js';
import './ContactView.css';

const ContactView = () => {
  const [showModal, setShowModal] = useState(false);
  const [contactLoader, setContactLoader] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleLoader = () => setContactLoader(false);

  const finishContact = () => {
    handleClose();
    navigate('/');
  };

  return(
    <div className='main-container'>
      <div className='info-container'>
        <h2 className='contact-info-title'>Contáctate con nosotros</h2>
        <div className='contact-info-container'> 
          <GrMailOption/> 
          <p className='contact-text'>ecommerce@contact.com</p>
        </div>
        <div className='contact-info-container'> 
          <GrPhone/>
          <p className='contact-text'>3416154565</p>
        </div>
        <div className='contact-info-container'> 
          <GrMapLocation/> 
          <p className='contact-text'>Av. Pellegrini 1500 - Rosario, Santa Fe, Argentina</p>
        </div> 
      </div>
      <div className='form-container'>
        <ContactForm 
          handleShow = {handleShow}
          handleLoader = {handleLoader}
          Loader = {contactLoader}
        />
      </div>
      <div>
        <ContactModal 
          contactLoader = {contactLoader}
          showModal = {showModal}
          finishContact = {finishContact}
        />
      </div>
    </div>
  );
}

export default ContactView;