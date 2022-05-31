import React from 'react';
import Item from '../Item/Item.js';
import './ItemList.css';

const ItemList = ({ title, products }) => {
  return(
    <div className='item-list row'>
      <h1 className='title-list'>{title}</h1>
      {
        Object.keys(products).length > 0 ?
        products.map( ({title, price, image, sumary, id}) => {
          return(
            <Item 
              key={id}
              title={title} 
              price={price} 
              image={image} 
              sumary={sumary} 
              id={id}
            />
          )
        })
        :
        <h4 style={{textAlign: 'center'}}>No existen productos de esta categoría</h4>
      }
    </div>
  );
}

export default ItemList;