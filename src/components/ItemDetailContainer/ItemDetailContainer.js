import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getItem } from '../../utils/productsMock.js';
import Loader from '../Loader/Loader.js';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  
  const [loader, setLoader] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect( () => {
    setLoader(true);
    getItem(id)
    .then( (response) => {
      setProduct(response)
      setLoader(false);
    })
    .catch( (err) => {
      /* console.log("Error: ", err) */
    })
  }, [])
  
  if(loader) {
    return(
      <Loader />
    );
  } else {
    return(
      <div className='item-detail-container container'>
        <h1>Producto seleccionado</h1>
        {Object.keys(product).length > 0 && <ItemDetail item={product} />}
      </div> 
    );
  } 
};

export default ItemDetailContainer;

