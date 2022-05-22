import React, {useState} from 'react';
import './ItemCount.css';

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
      <button 
        disabled={stock === 0}
        className='button-count'
        onClick={removeCount}>
        -
      </button>
      <p className='item-count'>{count}</p>
      <button 
        disabled={stock === 0}
        className='button-count'
        onClick={addCount}>
        +
      </button>
    </div>
  );
};

export default ItemCount;

