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

  const addCountToItem = (idCompra) =>{
    const newList = cartListItem.map((item) => {
      if(item.idCompra === idCompra){
        (totalQuantity(item.id)) < item.stock && (item.quantity+=1);
        return item;
      } else {
        return item
      }
    });
    setCartListItem(newList);
  };

  const totalQuantity = (id) => {
    const items = cartListItem.filter(cartItem => {return cartItem.id === id})
    return items.reduce((prevVal, currentVal) =>
      prevVal + currentVal.quantity, 0
    )
  };

  const removeCountToItem = (idCompra) =>{
    const newList = cartListItem.map((item) => {
      if(item.idCompra === idCompra){
        (item.quantity > 1) && (item.quantity-=1);
        return item;
      } else {
        return item
      }
    });
    setCartListItem(newList);
  };

  const data = {
    cartListItem,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    addCountToItem,
    removeCountToItem
  };

  return(
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartProvider };

