import React, {useState} from 'react';
import './ItemCount.css';
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock, initial }) => {

  const [count, setCount] = useState(initial);

  const addCount = () => {
    if(count < stock){
      setCount(count + 1);
    }
  };

  const removeCount = () => {
    if(count > initial){
      setCount(count - 1);
    }
  };

  return(
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
  );
};

export default ItemCount;

