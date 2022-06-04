import './ItemCount.css';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const ItemCount = ({ stock, initial, count, setCount, setShowOptions, selectedSize, selectedColor, item}) => {

  const { addItemToCart, cartListItem } = useContext(CartContext);

  const totalQuantity = () => {
    const items = cartListItem.filter(cartItem => {return cartItem.idCompra.slice(0,3).includes(item.id.toString())})
    return items.reduce((prevVal, currentVal) =>
      prevVal + currentVal.quantity, 0
    )
  }

  const addCount = () => {
    if(Object.keys(cartListItem).length === 0){
      count < stock && setCount(prev => prev + 1);
    } else {
      (count + totalQuantity()) < stock && setCount(prev => prev + 1);
    }
  };

  const removeCount = () => {
    count > initial && setCount(prev => prev - 1);
  };

  const handleAdd = () => {
    addItemToCart({...item, color: selectedColor, size: selectedSize, idCompra: item.id+selectedColor+selectedSize, quantity: count})
    setShowOptions(false);
  }

  return(
    <>
      <div className='item-count-container'>
        <Button 
          disabled={stock === 0 || totalQuantity() >= stock}
          variant="outline-dark"
          onClick={removeCount}>
            -
        </Button>
        <p className='item-count'>
          {totalQuantity() >= stock ? 0 : count} 
        </p>
        <Button 
          disabled={stock === 0 || totalQuantity() >= stock}
          variant="outline-dark"
          onClick={addCount}>
            +
        </Button>
      </div>
      <Button 
        disabled={stock === 0 || selectedSize ==='' || selectedColor === '' || totalQuantity() >= stock} 
        variant="dark" 
        onClick={handleAdd}>
          Agregar al carrito
      </Button>
    </>
  );
};

export default ItemCount;

