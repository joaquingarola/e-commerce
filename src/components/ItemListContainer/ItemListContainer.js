import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList.js';
import './ItemListContainer.css';

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const productos = [
      {
          title : 'BUZO PROJECT ROCK',
          price : 11989,
          image : '1.jpg',
          description: 'El equipo de entrenamiento de Project Rock se creó para ayudarte a superar tus límites.',
          stock: 15,
          id: 1
      },
      {
          title : 'BUZO STORM DAYTONA',
          price : 25899,
          image : '2.jpg',
          description: 'Esta es la única capa que no tienes que seguir quitándote y poniéndote todo el día.',
          stock: 5,
          id: 2
      },
      {
          title : 'BUZO CAMDEN FLEECE',
          price : 29299,
          image : '3.jpg',
          description: 'Con una tela suave, cómoda y acogedora te presentamos la campera Camden.',
          stock: 0,
          id: 3
      },
  ];

  const getProducts = () => {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    })
  };

  useEffect( () => {
    getProducts()
    .then( (response) => {
        setProducts(response)
    })
    .catch( (err) => {
        // console.log("Error: ", err)
    })
  }, [])


  return(
    <div className='main-container container'>
        <ItemList 
          title = 'Lista de productos'
          products = {products}
        />
    </div>
  );
};

export default ItemListContainer;