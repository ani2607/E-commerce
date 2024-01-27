import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import {Routes,Route} from 'react-router-dom';
import AddItem from "./pages/AddItem";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="bg-gray-800 text-gray-200" >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/additem" element={<AddItem/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App;
