import {Routes, BrowserRouter, Route} from 'react-router-dom'
import '../src/App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import HomePage from './pages/HomePage'
import Category from './pages/Category'
import Product from './pages/Product'
import Login from './pages/Auth'
import Cart from './pages/Commerce'





const App = () => {
  return(
    
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/auth/:type' element={<Login/>}/>
            <Route path='/category' element={<Category/>}/>
            <Route path='/category/:category' element={<Category/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
            
            
        </Routes>
        </BrowserRouter>
    
  )
}

export default App