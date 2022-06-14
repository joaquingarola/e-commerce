import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ( {children} ) => {

  const [cartListItem, setCartListItem] = useState([]);
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
  
  const addItemToCart = (item) => {
    let index = findItem(item);
    index === -1 ?
      setCartListItem(cartListItem => [...cartListItem, item])
    :
      cartListItem[index].quantity += item.quantity;
    setCartTotalQuantity(prev => prev + item.quantity);
  };

  const removeItemFromCart = (idCompra) => {
    const item = cartListItem.find( (i) => { return i.idCompra === idCompra })
    setCartTotalQuantity(prev => prev - item.quantity);
    setCartListItem(cartListItem.filter( (i) => { return i.idCompra !== idCompra }));
  };

  const clearCart = () => {
    setCartListItem([]);
    setCartTotalQuantity(0);
  }

  const findItem = (item) =>{
    let index = cartListItem.findIndex ( (p) => {return p.idCompra === item.idCompra})
    return index;
  }

  const addCountToItem = (idCompra) =>{
    const newList = cartListItem.map((item) => {
      if(item.idCompra === idCompra){
        if(itemTotalQuantity(item.id) < item.stock) {
          (item.quantity+=1);
          setCartTotalQuantity(prev => prev + 1);
        }
        return item;
      } else {
        return item
      }
    });
    setCartListItem(newList);
  };

  const itemTotalQuantity = (id) => {
    const items = cartListItem.filter(cartItem => {return cartItem.id === id})
    return items.reduce((prevVal, currentVal) =>
      prevVal + currentVal.quantity, 0
    )
  };

  const removeCountToItem = (idCompra) =>{
    const newList = cartListItem.map((item) => {
      if(item.idCompra === idCompra){
        if(item.quantity > 1) {
          (item.quantity-=1);
          setCartTotalQuantity(prev => prev - 1);
        }
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
    removeCountToItem,
    cartTotalQuantity
  };

  return(
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartProvider };

