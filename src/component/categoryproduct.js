import { useState } from 'react'
import {Col, Row, Card,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'





const CategoryProduct = ()=>{
    const navigate = useNavigate()
    const [categoryproduct] = useState([
        {
            'name': 'electronics', 
            'image':'https://lzd-img-global.slatic.net/live/id/p/d417f4c786631a1bdae8d1e69835708a.jpg_720x720q80.jpg'
        },
        {
            'name':'jewelery', 
            'image':'https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery-500x500.jpg'
        },
        {
            'name':"men's clothing", 
            'image':'https://hips.hearstapps.com/hmg-prod/images/index-online-64da7782717b2.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*'
        },
        {
            'name':"women's clothing", 
            'image':'https://img2.beritasatu.com/cache/beritasatu/960x620-3/1616841080.jpg'
        }
    ])
    const handleSelectProduct = (category) => {
        navigate(`/category/${category}`)
        window.location.reload()
        
    }
    return(
        <div style={{padding:"20px 50px"}}>
            
         <h5 style={{padding:20, backgroundColor: "#579BB1", width : "20%",textAlign: "center",color: "white" }}>
            Product Category</h5>
        <Row>
            {categoryproduct.map((e)=>{
                return(
                    <Col>
                    <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={e.image} />
              <Card.Body style={{textAlign :'center'}}>
                <Button style={{backgroundColor:'#579BB1'}} onClick={() => handleSelectProduct(e.name)} >{e.name.charAt(0).toUpperCase() + e.name.slice(1)}</Button>
              </Card.Body>
            </Card>
            </Col>
                )
            })}
        </Row>
        </div>
    )
}
export default CategoryProduct