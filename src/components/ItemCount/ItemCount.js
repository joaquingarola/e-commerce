import './ItemCount.css';
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock, initial, count, setCount, setShowOptions, selectedSize, selectedColor}) => {

  const addCount = () => {
    if(count < stock){
      setCount(prev => prev + 1);
    }
  };

  const removeCount = () => {
    if(count > initial){
      setCount(prev => prev - 1);
    }
  };

  const hideOptions = () => {
    setShowOptions(false)
  }

  return(
    <>
      <div className='item-count-container'>
        <Button 
          disabled={stock === 0}
          variant="outline-dark"
          onClick={removeCount}>
            -
        </Button>
        <p className='item-count'>{count}</p>
        <Button 
          disabled={stock === 0}
          variant="outline-dark"
          onClick={addCount}>
            +
        </Button>
      </div>
      <Button 
        disabled={stock === 0 || selectedSize ==='' || selectedColor === ''} 
        variant="dark" 
        onClick={hideOptions}>
          Agregar al carrito
      </Button>
    </>
  );
};

export default ItemCount;

