import { useParams } from "react-router-dom"
import Navigation from "../component/Navigation"
import CategoryProduct from "../component/categoryproduct"
import Productbycategory from "../component/productbycategory"

const Category = () => {
    const {category} = useParams()
    
    return (
        <>
        <Navigation />
        <CategoryProduct />
        {category === undefined ? null : <Productbycategory category={category}/>} 
        
        </>
    )
}
export default Category