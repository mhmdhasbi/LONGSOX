// import { useContext } from "react";
// import { Contex } from "./MyContex";
import Navigation from "../component/Navigation";
import Allproduct from "../component/allproduct";
import CategoryProduct from "../component/categoryproduct";
import Carousel from 'react-bootstrap/Carousel';
import banner1 from'../assets/img/iklanbanner1.jpg'

const HomePage = ()=> {
    // const {product} = useContext(Contex)
    return(
        <>
                    <Navigation/>
                    <Carousel data-bs-theme="dark" interval={1000 }>
      <Carousel.Item> 
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="Second slide"
        />
       
      </Carousel.Item>
      
    </Carousel>
                    <CategoryProduct />
                    <Allproduct isLimitProduct={true} />
        </>
        
    )
}
export default HomePage;