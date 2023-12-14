import {useEffect, useState} from 'react'
import axios from 'axios'
import {Col, Row, Card,Button} from 'react-bootstrap'

const Productbycategory = ({category})=>{
    const [Productbycategory,setProductbycategory]=useState([])
    
    
    useEffect (()=>{
        axios.get(`https://fakestoreapi.com/products/category/${category}`).then ((response)=>{
        setProductbycategory(response.data)

        })
        .catch((err)=>{
            console.log(err)
        })    

    },[])
    return(
        <>
        <Row>
    {Productbycategory.map((e)=>{
        return(
            <Col>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.image} />
      <Card.Body>
        <Card.Title>{e.title}</Card.Title>
        <Card.Text>
          {e.description}
        </Card.Text>
        <Button style={{backgroundColor:'#579BB1'}}>buy</Button>
      </Card.Body>
    </Card>
    </Col>
        )
    })}

    </Row>
        </>
    )
}

export default Productbycategory