import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getItem } from '../../utils/productsMock';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState({});
  
  useEffect( () => {
    getItem()
    .then( (response) => {
      setProduct(response)
    })
    .catch( (err) => {
      /* console.log("Error: ", err) */
    })
  }, [])
  
  return(
    <div className='item-detail-container container'>
      <h2>Producto seleccionado</h2>
      <ItemDetail
        item = {product}
      />
    </div>
  );
};

export default ItemDetailContainer;