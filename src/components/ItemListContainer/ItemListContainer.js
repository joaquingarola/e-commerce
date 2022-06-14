import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList.js';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import Loader from '../Loader/Loader.js';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../utils/firebaseConfig';

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
        console.log("Error: ", err)
      })
      .finally(() => {
        setLoader(false);
      })
    } else {
      getProductsByCategory(id)
      .then( (response) => {
        setProducts(response);
      })
      .catch( (err) => {
        console.log("Error: ", err)
      })
      .finally(() => {
        setLoader(false);
      })
    }
  }, [id])

  const getProducts = async () => {
    const productsSnapshot = await getDocs(collection(db, "productos"));
    const productList = productsSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });

    return productList;
  };

  const getProductsByCategory = async (id) => {
    const q = query(collection(db, 'productos'), where ('category', '==', id))
    const categorySnapshot = await getDocs(q)
    const categoryList  = categorySnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });

    return categoryList;
  };

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