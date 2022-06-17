import React, { useState } from 'react';
import CartModalForm from '../CartModalForm/CartModalForm';
import CartModalTicket from '../CartModalTicket/CartModalTicket';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../utils/firebaseConfig';

const CartModal = ( { showModal, handleClose } ) => {
  const [success, setSuccess] = useState(0);
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const saveData = async (newOrder) => {
    const orderFirebase = collection(db, 'ordenes');
    const orderDoc = await addDoc(orderFirebase, newOrder);
    setSuccess(orderDoc.id);
  };

  return (
    <>
      {success ? (
        <CartModalTicket 
          showModal = {showModal}
          formValue = {formValue}
          success = {success}
        />
      ) : (
        <CartModalForm 
          handleClose = {handleClose}
          formValue = {formValue}
          setFormValue = {setFormValue}
          showModal = {showModal}
          saveData = {saveData}
        />
      )} 
    </>
  );
}

export default CartModal;