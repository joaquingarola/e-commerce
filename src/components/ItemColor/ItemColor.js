import React from 'react';
import './ItemColor.css';

const ItemColor = ( {color, selectedColor, selectColor} ) => {
  return(
    <div className='color-list'>
      <h6 className='color-title'>Seleccione color</h6>
      {
        color.map( ( c ) => {
          return(
            <div 
                key={c}
                className={(selectedColor === c) ? 'color-item selected' : 'color-item'} 
                onClick={() => selectColor(c)}
                style={{backgroundColor: c}}>
            </div>
          )
        })
      }
    </div>
  );
}

export default ItemColor;