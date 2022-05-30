import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ( {title, price, image, sumary, id} ) => {
  return(
    <Card className = 'col-9 col-sm-3 card'>
      <Card.Img variant="top" src={image} />
      <Card.Body className='card-body'>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2">$ {price}</Card.Subtitle>
        <Card.Text>{sumary}</Card.Text>
        <Button variant="dark" as={Link} to={`/item/${id}`}>Más detalles</Button>
      </Card.Body>
    </Card> 
  );
}

export default Item;