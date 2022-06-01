import React from 'react';
import './ItemSize.css';

const ItemSize = ( {size, selectedSize, setSelectedSize} ) => {
  
  const selectSize = (op) => {
    setSelectedSize(op)
  };

  return(
    <div className='size-list'>
      <h6 className='size-title'>Seleccione talle</h6>
      {
        size.map( ( tamaño ) => {
          return(
            <div 
              key={tamaño}
              className={(selectedSize === tamaño) ? 'size-item selected' : 'size-item'} 
              onClick={() => selectSize(tamaño)}>
                <p className='size-text'>{tamaño}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default ItemSize;