import { useState,useEffect } from 'react';
import Cart from '../assets/Cart_White.png';
import {Link,Navigate} from 'react-router-dom';
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const Navbar = () => {

  const [navigate,setNavigate] = useState(false);
  const [items,setItems] = useState([]);

  useEffect(()=>{

    const getCartItems = ()=>{
      fetch(`${backendUrl}/cart`,{
        method : 'GET',
        credentials : "include"
      })
      .then((res)=>{
        return res.json();
      })
      .then((cartItems)=>{
        setItems(cartItems);
      })
      .catch((err)=>{
        console.log(err);
        alert(err.message);
      })
    }
    getCartItems();
  },[])
  console.log("items : ",items);

  const handleLogout = async()=>{
    
    try {
      const result  = await fetch(`${backendUrl}/logout`,{
        method : 'POST',
        credentials : 'include'
      });
      console.log(result)
      setNavigate(true);
    } catch (error) {
      console.log(error);
      alert("Error while logging out");
    }
  }


  if(navigate){
    return <Navigate to={'/login'} />
  }


    return (

      <nav className="flex items-center justify-between bg-gray-700 shadow-lg lg:flex-wrap lg:py-4 fixed z-10 w-full top-0">
      <div className="flex items-center px-3 mt-0">
        <div className="ml-2">
          <Link className="text-4xl" to="/">
            Ecommerce
          </Link>
        </div>
      </div>

      <ul
        className={`list-style-none lg:flex lg:flex-row lg:ml-auto lg:space-x-4 mr-1`}
        // className={`list-style-none lg:flex lg:flex-row lg:ml-auto lg:space-x-4 ${
        //   menuOpen ? 'block' : 'hidden'
        // }`}
      >
        <li className="my-2 lg:my-0">
          <Link to="/">Home</Link>
        </li>
        <li className="my-2 lg:my-0">
          <Link to="/about">About</Link>
        </li>

        {
          (items.message)?(<li className="my-2 lg:my-0">
          <Link to="/login">Login</Link>
        </li>):(<li className="my-2 lg:my-0">
          <button onClick={handleLogout}>Logout</button>
        </li>)
        }
        
        


        <li className="my-2 lg:my-0">
          <Link to="/Cart">
            <img src={Cart} className="m-0 w-7 h-7" alt="cart" />
          </Link>
        </li>

      </ul>
    </nav>
    );
};

export default Navbar;
