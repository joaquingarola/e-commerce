import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList.js';
import { getProducts } from '../../utils/productsMock.js';
import './ItemListContainer.css';

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  
  useEffect( () => {
    getProducts()
    .then( (response) => {
        setProducts(response)
    })
    .catch( (err) => {
      /* console.log("Error: ", err) */
    })
  }, [])


  return(
    <div className='item-list-container container'>
        <ItemList 
          title = 'Productos recomendados'
          products = {products}
        />
    </div>
  );
};

export default ItemListContainer;