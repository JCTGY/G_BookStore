import React from 'react';
import {Card, Button} from 'react-bootstrap';

const ShopItem = ({item}) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top" 
        src={item.imageLinks && item.imageLinks.smallThumbnail}
        onError={(e)=>{e.target.onerror = null; e.target.src="https://cdn.gsmarena.com/pics/15/03/play-books-expands-in-eu/gsmarena_002.jpg"}}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
        {item.description && item.description.slice(0, 100)}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ShopItem;