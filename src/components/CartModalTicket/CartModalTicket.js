import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import CartContext from '../../context/CartContext';
import './CartModalTicket.css';

const CartModalTicket = ({ showModal, formValue, success}) => {
  const navigate = useNavigate();
  const {  totalPrice, clearCart } = useContext(CartContext);

  const finishBuy = () => {
    clearCart();
    navigate('/');
  };

  return(
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
          <p><span style={{fontWeight: '500'}}>Valor total:</span> ${totalPrice}</p>
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
  );
};

export default CartModalTicket;