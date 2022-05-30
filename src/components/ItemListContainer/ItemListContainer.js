import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList.js';
import { getProducts } from '../../utils/productsMock.js';
import './ItemListContainer.css';
import Loader from '../Loader/Loader.js';

const ItemListContainer = ({ title }) => {

  const [loader, setLoader] = useState(false);
  const [products, setProducts] = useState([])
  
  useEffect( () => {
    setLoader(true);
    getProducts()
    .then( (response) => {
      setProducts(response);
      setLoader(false);
    })
    .catch( (err) => {
      /* console.log("Error: ", err) */
    })
  }, [])

  if (loader) {
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