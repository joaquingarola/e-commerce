import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount.js';
import { Card, Button} from 'react-bootstrap';
import ItemSize from '../ItemSize/ItemSize.js';
import ItemColor from '../ItemColor/ItemColor.js';
import './ItemDetail.css';

const ItemDetail = ( {item} ) => {
  
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')

  const selectSize = (op) => {
    setSelectedSize(op)
  };

  const selectColor = (op) => {
    setSelectedColor(op)
  };

  return(
    <div className='item-detail'>
      <Card className = 'col-9 col-sm-12 card-detail'>
        <Card.Img variant="left" className = 'col-9 col-sm-6' src={item.image} />
        <Card.Body className='card-body col-9 col-sm-4'>
          <Card.Text className="mb-0 card-title">{item.title}</Card.Text>
          <Card.Text className="mb-0 card-price">$ {item.price}</Card.Text>
          <Card.Text className="mb-1 card-dues">3 cuotas de $ {(item.price/3).toFixed(2)}</Card.Text>
          <Card.Text>{item.description}</Card.Text>
          <ItemSize
            size = {item.size}
            selectedSize = {selectedSize}
            selectSize = {selectSize}
          />
          <ItemColor
            color = {item.color}
            selectedColor = {selectedColor}
            selectColor = {selectColor}
          />
          <ItemCount 
            stock={item.stock}
            initial={(item.stock >= 1 ? 1 : item.stock)}
          />
          <Button disabled={item.stock === 0} variant="dark">Comprar</Button>
        </Card.Body>
      </Card>  
    </div>
  );
};

export default ItemDetail;
