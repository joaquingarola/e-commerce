import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ( {children} ) => {

  const [cartListItem, setCartListItem] = useState(JSON.parse(localStorage.getItem('products')) || []);
  
  const addItemToCart = (item) => {
    setCartListItem(prevItems => {
      const index = prevItems.findIndex ( (p) => {return p.idCompra === item.idCompra});
      if(index === -1){
        localStorage.setItem('products', JSON.stringify([...prevItems, item]));
        return [...prevItems, item]
      } else{
        prevItems[index].quantity += item.quantity;
        localStorage.setItem('products', JSON.stringify(prevItems));
        return prevItems 
      }
        
    });
  };

  const removeItemFromCart = (idCompra) => {
    localStorage.setItem('products', JSON.stringify(cartListItem.filter( (i) => { return i.idCompra !== idCompra })))
    setCartListItem(cartListItem.filter( (i) => { return i.idCompra !== idCompra }));
  };

  const clearCart = () => {
    setCartListItem([]);
    localStorage.setItem('products', JSON.stringify([]));
  }

  const addCountToItem = (idCompra) =>{
    const newList = cartListItem.map((item) => {
      if(item.idCompra === idCompra){
        if(itemTotalQuantity(item.id) < item.stock) {
          (item.quantity+=1);
        }
        return item;
      } else {
        return item
      }
    });
    localStorage.setItem('products', JSON.stringify(newList));
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
        }
        return item;
      } else {
        return item
      }
    });
    localStorage.setItem('products', JSON.stringify(newList));
    setCartListItem(newList);
  };

  const data = {
    cartListItem,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    addCountToItem,
    removeCountToItem,
    cartTotalQuantity: cartListItem.reduce((prevVal, currentVal) => prevVal + currentVal.quantity, 0),
    totalPrice: cartListItem.reduce((prevVal, currentVal) => prevVal + currentVal.quantity*currentVal.price, 0)
  };

  return(
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartProvider };

