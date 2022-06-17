import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './CartList.css';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CartList = ({ handleShow }) => {
  const { cartListItem, removeItemFromCart, clearCart, addCountToItem, removeCountToItem, cartTotalQuantity, totalPrice } = useContext(CartContext);
  
  if(Object.keys(cartListItem).length > 0){
    return(
      <>
        <div className='cart-container'>
          <div className='cart-header-container'>
            <div className='item-image-name header'>Producto</div>
            <div className='item-color-container header'>Color</div>
            <div className='item-size header'>Talle</div>
            <div className='item-price header'>Precio</div>
            <div className='item-quantity header'>Cantidad</div>
            <div className='item-subtotal header'>Subtotal</div>
            <div className='item-delete header'></div>
          </div>
          {
            cartListItem.map( ({title, price, image, color, size, idCompra, quantity}) => {
              return(
                <div key={idCompra} className='cart-item-container'>
                  <div className='item-image-container'><img src={image} alt={title} className='item-image'/></div>
                  <div className='item-name'>{title}</div>
                  <div className='item-color-container'>
                    <div className='item-color' style={{backgroundColor: color}}>
                    </div>
                  </div>
                  <div className='item-size'>{size}</div>
                  <div className='item-price'>${price}</div>
                  <div className='item-quantity'>
                    <FaMinus onClick={() => removeCountToItem(idCompra)} style={{cursor: 'pointer', userSelect: 'none'}} />
                    {quantity}
                    <FaPlus onClick={() => addCountToItem(idCompra)} style={{cursor: 'pointer', userSelect: 'none'}} />
                  </div>
                  <div className='item-subtotal'>${quantity*price}</div>
                  <div className='item-delete'><RiDeleteBin6Fill style={{cursor:'pointer'}} onClick={() => removeItemFromCart(idCompra)}/></div>
                </div>
              )
            })
          }
          <div className='cart-footer-container'>
            <div className='footer-title'>Total</div>
            <div className='total-quantity'> 
              { cartTotalQuantity }
            </div>
            <div className='total-price'>$ 
              { totalPrice }
            </div>
            <div style={{width:'10%'}}>
            </div>
          </div>
          <div className='footer-buttons'>
            <div style={{width:'5%', marginRight:'10px'}}>
              <Button variant='danger' className='clear-button' onClick={clearCart}> 
                <RiDeleteBin6Fill style={{cursor: 'pointer'}}/>
              </Button>
            </div>
            <div className='finish-button' style={{width:'15%'}}>
              <Button 
                variant='dark' 
                style={{borderRadius: '20px', width:'100%', height:'40px !important'}}
                onClick={handleShow}
                >
                  Finalizar compra  
              </Button>
            </div>
          </div>
        </div>
      </>
    )
  } else{
    return(
      <>
        <h5 style={{marginTop: '50px'}}>Tu carrito está vacío.</h5>
        <Button variant='dark' as={Link} to='/'>
          Ver productos
        </Button>
      </>
    );
  }
};

export default CartList;