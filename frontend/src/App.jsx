import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from './component/Login'
import Navbar from './component/Navbar'
import Signup from './component/Signup';
import Home from './component/Home';
import AddProduct from './component/AddProduct';
import ManageProduct from './component/ManageProduct';
import EditProduct from './component/EditProduct';
import SingleProduct from './component/SingleProduct';
import ManageUser from './component/ManageUser';
import Profile from './component/Profile';
import { CartProvider } from './component/CartContext';
import ShoppingCart from './component/ShoppingCart';

function App() {
  return (
    <>
     <CartProvider>
     <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/addProduct" element={<AddProduct/>} />
    <Route path="/manageProduct" element={<ManageProduct/>} />
    <Route path="/getProduct/:id" element={<EditProduct/>} />
    <Route path="/singleProduct/:id" element={<SingleProduct/>} />
    <Route path="/manageUser" element={<ManageUser/>} />
    <Route path="/profile/:id" element={<Profile/>} />
    <Route path="/Cart" element={<ShoppingCart/>} />
    </Routes>
    </Router>
     </CartProvider>
 
    </>
  )
}

export default App
