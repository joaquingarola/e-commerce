import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader.js';
import { doc, getDoc } from "firebase/firestore";
import db from '../../utils/firebaseConfig';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect( () => {
    setLoader(true);
    getProduct()
    .then( (response) => {
      (response === undefined) ? navigate('/notFound') : setProduct(response);
    })
    .catch( (err) => {
      console.log("Error: ", err)
    })
    .finally(() => {
      setLoader(false);
    })
  }, [id])

  const getProduct = async () =>{
    const docRef = doc(db, 'productos', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        let product = docSnap.data();
        product.id = docSnap.id;
        return(product);
    }
  }
  
  if(loader) {
    return(
      <Loader 
        h = '550' 
      />
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

