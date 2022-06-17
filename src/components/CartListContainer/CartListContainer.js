import { useState } from 'react';
import CartList from '../CartList/CartList.js';
import CartModal from '../CartModal/CartModal.js';

const CartListContainer = () => {

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <CartList 
        handleShow = {handleShow}
      />
      <CartModal 
        showModal= {showModal}
        handleClose= {handleClose}
        handleShow= {handleShow}
      />
    </div>
  );
};

export default CartListContainer;