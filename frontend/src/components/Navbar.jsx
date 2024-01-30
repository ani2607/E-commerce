import { useState } from 'react';
import Cart from '../assets/Cart_White.png';
import {Link,Navigate} from 'react-router-dom';
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const Navbar = () => {

  const [navigate,setNavigate] = useState(false);


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
      <nav className="flex w-full flex-nowrap items-center justify-between bg-gray-700 shadow-lg focus:text-neutral-700 lg:flex-wrap lg:py-4 fixed z-10 mb-10">
        <div className="flex w-full flex-wrap items-center justify-between px-3 mt-0">
          <div className="ml-2">
            <Link className="text-4xl" to="/">Ecommerce</Link>
          </div>
          <ul className="list-style-none mr-[10px] flex flex-col pl-0 lg:flex-row text-xl" >
            <li className="my-0 p-1 mr-4">
              <Link to="/">
                Home
              </Link>
            </li>
            <li className="my-0 p-1 mr-4">
              <Link to="/about">
                About
              </Link>
            </li>
            <li className="my-0 p-1 mr-4">
              <Link  to="/login">
                Login
              </Link>
            </li>
            <li className="my-0 p-1 mr-4">
              <button onClick={handleLogout} >
               Logout
              </button>
            </li>
            <li className="my-0 p-1">
              <Link  to="/Cart">
                <img src={Cart} className="m-0 w-7 h-7" alt="cart"/>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;
