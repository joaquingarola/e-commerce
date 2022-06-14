import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount.js';
import { Link } from 'react-router-dom';
import { Card, Button} from 'react-bootstrap';
import ItemSize from '../ItemSize/ItemSize.js';
import ItemColor from '../ItemColor/ItemColor.js';
import './ItemDetail.css';

const ItemDetail = ( {item} ) => {
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [count, setCount] = useState(item.stock >= 1 ? 1 : 0);
  const [showOptions, setShowOptions] = useState(true);

  return(
    <div className='item-detail'>
      <Card className = 'col-9 col-sm-12 card-detail'>
        <Card.Img variant="left" className = 'col-9 col-sm-6' src={item.image} />
        <Card.Body className='card-body col-9 col-sm-4'>
          <Card.Text className="mb-0 card-title">{item.title}</Card.Text>
          <Card.Text className="mb-0 card-price">$ {item.price}</Card.Text>
          <Card.Text className="mb-1 card-dues">3 cuotas de $ {(item.price/3).toFixed(2)}</Card.Text>
          <Card.Text>{item.description}</Card.Text>
          {
            showOptions ?
              <>
                <ItemSize
                  size = {item.size}
                  selectedSize = {selectedSize}
                  setSelectedSize = {setSelectedSize}
                />
                <ItemColor
                  color = {item.color}
                  selectedColor = {selectedColor}
                  setSelectedColor = {setSelectedColor}
                />
                <ItemCount 
                  count={count}
                  setCount={setCount}
                  setShowOptions={setShowOptions}
                  selectedSize={selectedSize}
                  selectedColor={selectedColor}
                  item={item}
                />
              </>
            :
              <div>
                <h6>Producto agregado al carrito con éxito! </h6>
                <Button as={Link} to='/cart' variant="dark" className='button-detail'>Ir al carrito</Button>
                <div style={{marginTop:'4px'}}>
                  <Button as={Link} to='/Productos' variant="dark" className='button-detail'>Seguir comprando</Button>
                </div>
              </div>
          }
        </Card.Body>
      </Card>  
    </div>
  );
};

export default ItemDetail;
