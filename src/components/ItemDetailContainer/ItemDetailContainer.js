import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { productos } from '../../utils/productsMock.js';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  
  const { id } = useParams();
  const [product, setProduct] = useState({});
  
  const productFilter = productos.find( (product) => {
    return product.id === Number(id);
  })

  useEffect( () => {
    setProduct(productFilter)
  }, [])
  
  return(
    <div className='item-detail-container container'>
      <h1>Producto seleccionado</h1>
      {Object.keys(product).length > 0 && <ItemDetail item={product} />}
    </div> 
  );
};

export default ItemDetailContainer;

