import React from 'react';
import Item from '../Item/Item.js';
import './ItemList.css';

const ItemList = ({ title, products }) => {
  return(
    <div className='item-list row'>
      <h1 className='title-list'>{title}</h1>
      {
        products.map( ({title, price, image, description, stock, id}) => {
          return(
            <Item 
              key={id}
              title={title} 
              price={price} 
              image={image} 
              description={description} 
              stock={stock}
            />
          )
        })
      }
    </div>
  );
}

export default ItemList;