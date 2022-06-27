import { Modal, Button } from 'react-bootstrap';
import Loader from '../Loader/Loader.js';
import './ContactModal.css';

const ContactModal = ({ finishContact, showModal, contactLoader }) => {
  if(contactLoader){
    return(
      <Modal show={showModal} style={{borderRadius: '30px', border: '1px solid grey'}}>
        <div>
          <Loader 
            h = '280' 
          />
        </div>
      </Modal>
    );
  } else {
    return(
      <Modal show={showModal} onHide={finishContact} style={{borderRadius: '30px', border: '1px solid grey'}}>
        <div>
          <div className="wrapper"> 
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> 
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> 
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          </div>
          <h4 style={{textAlign: 'center', margin:'20px 10px'}}>Su mensaje ha sido enviado con éxito.</h4>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button
              variant='dark' 
              style={{borderRadius: '20px', marginBottom: '20px', width:'25%', height:'40px !important'}}
              onClick={finishContact}>
                Cerrar
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
};

export default ContactModal;