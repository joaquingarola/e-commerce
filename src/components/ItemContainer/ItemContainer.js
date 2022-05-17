import React from 'react';
import './ItemContainer.css';

const ItemContainer = ({ titulo }) => {
  return(
    <div className='item-container'>
      <h2 className='item-titulo'>{titulo}</h2>
    </div>
  );
}

export default ItemContainer;