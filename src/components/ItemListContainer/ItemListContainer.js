import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList.js';
import { getProducts } from '../../utils/productsMock.js';
import './ItemListContainer.css';
import Loader from '../Loader/Loader.js';

const ItemListContainer = ({ title }) => {

  const [load, setLoad] = useState(false);
  const [products, setProducts] = useState([])
  
  useEffect( () => {
    setLoad(true);
    getProducts()
    .then( (response) => {
        setProducts(response);
        setLoad(false);
    })
    .catch( (err) => {
      /* console.log("Error: ", err) */
    })
  }, [])

  if (load) {
    return(
      <Loader />
    );
  } else {
    return(
      <div className='item-list-container container'>
          <ItemList 
            title = {title}
            products = {products}
          />
      </div>
    );
  }
};

export default ItemListContainer;