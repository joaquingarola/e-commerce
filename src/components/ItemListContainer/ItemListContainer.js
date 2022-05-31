import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList.js';
import { getItemByCategory, getProducts } from '../../utils/productsMock.js';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import Loader from '../Loader/Loader.js';

const ItemListContainer = ({ title }) => {

  const [loader, setLoader] = useState(false);
  const [products, setProducts] = useState([])
  const { id } = useParams();
  
  useEffect( () => {
    setLoader(true);
    if(id === undefined) {
      getProducts() 
      .then( (response) => {
        setProducts(response);
        setLoader(false);
      })
      .catch( (err) => {
        /* console.log("Error: ", err) */
      })
    } else {
      getItemByCategory(id)
      .then( (response) => {
        setProducts(response);
        setLoader(false);
      })
      .catch( (err) => {
        /* console.log("Error: ", err) */
      })
    }
  }, [id])

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