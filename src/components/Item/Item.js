import React from 'react';
import {Card, Button} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount.js';
import './Item.css';

const Item = ( {title, price, image, description, stock} ) => {
  return(
    <Card className = 'col-9 col-sm-3 card'>
      <Card.Img variant="top" src={image} />
      <Card.Body className='card-body'>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2">$ {price}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <ItemCount 
          stock={stock}
          initial={(stock >= 1) ? 1 : stock}
        />
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card> 
  );
}

export default Item;