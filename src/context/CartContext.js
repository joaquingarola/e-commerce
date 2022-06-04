import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ( {children} ) => {

  const [cartListItem, setCartListItem] = useState([]);
  
  const addItemToCart = (item) => {
    let index = findItem(item);
    index === -1 ?
      setCartListItem(cartListItem => [...cartListItem, item])
    :
      cartListItem[index].quantity += item.quantity;
  };

  const removeItemFromCart = (idCompra) => {
    setCartListItem(cartListItem.filter( (p) => { return p.idCompra !== idCompra }))
  };

  const clearCart = () => {
    setCartListItem([]);
  }

  const findItem = (item) =>{
    let index = cartListItem.findIndex ( (p) => {return p.idCompra === item.idCompra})
    return index;
  }

  const data = {
    cartListItem,
    addItemToCart,
    removeItemFromCart,
    clearCart
  };

  return(
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartProvider };

