import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { GrMailOption, GrMapLocation, GrPhone } from 'react-icons/gr';
import ContactForm from '../ContactForm/ContactForm.js';
import ContactModal from '../ContactModal/ContactModal.js';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../utils/firebaseConfig';
import './ContactView.css';

const ContactView = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const saveData = async (newContact) => {
    const contactFirebase = collection(db, 'mensajes');
    const contactDoc = await addDoc(contactFirebase, newContact);
    handleShow();
    /* setSuccess(contactDoc.id); */
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

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
          saveData = {saveData}
        />
      </div>
      <ContactModal 
        showModal = {showModal}
        finishContact = {finishContact}
      />
    </div>
  );
}

export default ContactView;