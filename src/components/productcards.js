import React from 'react'
import { Card } from 'react-bootstrap';

const ProductCards = (props) => {

    const { avatar, createdAt, id, price, productName } = props

  return (
    
    <Card className='h-100' style={{ width: '18rem' }}>
    <Card.Img variant="top" src={`${avatar}?${id}`}/>
    <Card.Body>
    <Card.Subtitle>{id}</Card.Subtitle>
      <Card.Title>{productName}</Card.Title>
      <Card.Text>{price}</Card.Text>
      <Card.Title>{createdAt}</Card.Title>

    </Card.Body>
  </Card>
    );

}

export default ProductCards