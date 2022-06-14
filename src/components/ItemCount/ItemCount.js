import './ItemCount.css';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const ItemCount = ({ count, setCount, setShowOptions, selectedSize, selectedColor, item}) => {

  const { addItemToCart, cartListItem } = useContext(CartContext);

  const totalQuantity = () => {
    const items = cartListItem.filter(cartItem => {return cartItem.id === item.id})
    return items.reduce((prevVal, currentVal) =>
      prevVal + currentVal.quantity, 0
    )
  }

  const addCount = () => {
    if(Object.keys(cartListItem).length === 0){
      count < item.stock && setCount(prev => prev + 1);
    } else {
      (count + totalQuantity()) < item.stock && setCount(prev => prev + 1);
    }
  };

  const removeCount = () => {
    count > 1 && setCount(prev => prev - 1);
  };

  const handleAdd = () => {
    addItemToCart({...item, color: selectedColor, size: selectedSize, idCompra: item.id+selectedColor+selectedSize, quantity: count})
    setShowOptions(false);
  }

  return(
    <>
      <div className='item-count-container'>
        <Button 
          disabled={item.stock === 0 || totalQuantity() >= item.stock}
          variant="outline-dark"
          onClick={removeCount}>
            -
        </Button>
        <p className='item-count'>
          {totalQuantity() >= item.stock ? 0 : count} 
        </p>
        <Button 
          disabled={item.stock === 0 || totalQuantity() >= item.stock}
          variant="outline-dark"
          onClick={addCount}>
            +
        </Button>
      </div>
      <Button 
        disabled={item.stock === 0 || selectedSize ==='' || selectedColor === '' || totalQuantity() >= item.stock} 
        variant="dark" 
        onClick={handleAdd}>
          {
            (item.stock === 0 ||  totalQuantity() >= item.stock) ? 'Sin stock' 
              : (selectedSize === '' || selectedColor === '') ? 'Seleccione talle y color' : 'Agregar al carrito'
          }
      </Button>
    </>
  );
};

export default ItemCount;

