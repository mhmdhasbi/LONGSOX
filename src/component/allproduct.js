import {useEffect, useState} from 'react'
import axios from 'axios'
import {Col, Row, Card,Button} from 'react-bootstrap'


const Allproduct = ({isLimitProduct})=>{
  const URLAPi = isLimitProduct ?  `https://fakestoreapi.com/products?limit=5` : `https://fakestoreapi.com/products`

    const [product,setProduct]=useState([])
    
    useEffect (()=>{
        axios.get(URLAPi).then ((response)=>{
        setProduct(response.data)

        })
        .catch((err)=>{
            console.log(err)
        })    

    },[])
  return (
    <div style={{padding:"20px 50px"}}>
        
        <h5 style={{padding:20, backgroundColor: "#579BB1", width : "20%",textAlign: "center",color: "white" }}>All Product</h5>
       <Row>
    {product.map((e)=>{
        return(
            <Col>
            <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={e.image} />
      <Card.Body>
        <Card.Title>{e.title}</Card.Title>
        <Card.Text>
          {e.description}
        </Card.Text>
        <Button style={{backgroundColor: "#579BB1"}}>buy</Button>
      </Card.Body>
    </Card>
    </Col>
        )
    })}

    </Row>
    </div>
  );
}
export default Allproduct


