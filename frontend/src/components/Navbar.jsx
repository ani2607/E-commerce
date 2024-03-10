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
  },[items])
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

      <nav className="flex items-center justify-between bg-gray-700 shadow-lg lg:flex-wrap lg:py-2 fixed z-10 w-full top-0">
      <div className="flex items-center px-1 mt-0">
        <div className="ml-1">
          <Link className="text-5xl" to="/">
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
        <li className="mb-1 text-2xl mt-2">
          <Link to="/">Home</Link>
        </li>
        <li className="mb-1 text-2xl mt-2">
          <Link to="/about">About</Link>
        </li>

        {
          (items.message)?(<li className="mb-1 text-2xl mt-2">
          <Link to="/login">Login</Link>
        </li>):(<li className="mb-1 text-2xl mt-2">
          <button onClick={handleLogout}>Logout</button>
        </li>)
        }
        <li className="my-2 lg:my-0">
          <Link to="/Cart">
            {(items)&&(items.length!=0)&& (<div className='ml-1 mt-0 z-[1000px] text-[10px]'>{items.length}</div>)}
            <div>
            <img src={Cart} className="mr-2 w-8 p-0 h-8 mt-0" alt="cart" />
            </div>
          </Link>
        </li>

      </ul>
    </nav>
    );
};

export default Navbar;
