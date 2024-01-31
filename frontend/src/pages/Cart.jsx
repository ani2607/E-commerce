import Navbar from '../components/Navbar';
import CartItem from '../components/CartItem';
import { useEffect, useState } from 'react';
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

function Cart() {
  const [items,setItems] = useState([]);
  useEffect(()=>{

    const getCartItems = async()=>{
      const res = await  fetch(`${backendUrl}/cart`,{
        credentials : "include"
      });
      setItems(res);
      console.log(res);
    }
    getCartItems();
  },[])
  /* items array has all the products the user had added to cart*/

  return (
    <div className=''>
      <Navbar className="m-0"/>
      <div className='absolute mt-[80px]'>
        <div>
          <h1 className="text-3xl flex justify-center my-5 bg-orange-500 rounded-xl font-medium ml-[550px] w-1/4 p-2 text-black">Total : 3000</h1>
        </div>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <button className="bg-orange-600 w-full p-3 rounded-md text-3xl font-bold text-gray-100 hover:bg-orange-700 hover:text-gray-200">Place Order</button>
      </div>
    </div>
  )
}

export default Cart
