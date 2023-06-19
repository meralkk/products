import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCards from './productcards';

const Products = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProduct = () => {

      
            fetch("https://649098c31e6aa71680cb8adf.mockapi.io/product")
            .then((resp)=>resp.json())
            .then((data)=>{
                setProduct(data)
                console.log(data)
            })
    
            .catch ((err)=>{
                console.log(err)
            })
    
            .finally(()=> {
                setLoading(false)
            })
        }


    

    useEffect(() => {

         setTimeout(() => {
        getProduct()
     }, 1000);

       

    }, [])
    

  return (
    <Container className='mt-5'>

    {loading && <Spinner animation='border' variant='warning' />}

    <Row className='row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4'>
        
      {product.map((item) => (
        <Col key={item.id} className='mb-4'>
          <ProductCards {...item} />
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default Products;