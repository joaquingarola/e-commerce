import React from 'react';
import CartList from '../components/CartList/CartList.js';

const Cart = () => {
  return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <CartList />
    </div>
  );
}

export default Cart;