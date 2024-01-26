import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="bg-gray-800 text-gray-200" >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App;
