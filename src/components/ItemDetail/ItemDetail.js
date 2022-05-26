import React from 'react';
import ItemCount from '../ItemCount/ItemCount.js';
import { Card, Button} from 'react-bootstrap';

const ItemDetail = ( {item} ) => {
 
  return(
    <div className='item-list'>
      <Card className = 'col-9 col-sm-3 card'>
        <Card.Img variant="top" src={item.image} />
        <Card.Body className='card-body'>
          <Card.Title>{item.title}</Card.Title>
          <Card.Subtitle className="mb-2">$ {item.price}</Card.Subtitle>
          <Card.Text>{item.description}</Card.Text>
          <ItemCount 
            stock={item.stock}
            initial={(item.stock >= 1) ? 1 : item.stock}
          />
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>  
    </div>
  );
};

export default ItemDetail;