import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Item from "./pages/Item";
import {Routes,Route} from 'react-router-dom';
import AddItem from "./pages/AddItem";

function App() {
  return (
    <div className="bg-gray-800 text-gray-200" >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/card" element={<Item/>}/>
        <Route path="/additem" element={<AddItem/>}/>
      </Routes>
    </div>
  )
}

export default App;
