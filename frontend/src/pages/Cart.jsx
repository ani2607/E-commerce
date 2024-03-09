import Navbar from '../components/Navbar';
import CartItem from '../components/CartItem';
import { useEffect, useState } from 'react';
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

function Cart() {
  const [items,setItems] = useState([]);
  const [total,setTotal] = useState(0);
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
      let sum = 0;
      items.forEach((item)=>{
        sum += item.productPrice
      })
      setTotal(sum);
    }
    getCartItems();
  },[items])
  /* items array has all the products the user had added to cart*/
  console.log("items : ",items);
  return (
    <div>
      <Navbar className="m-0"/>
      <div className='absolute mt-[80px]'>
        <div>
          <h1 className="text-3xl flex text-center justify-center my-5 bg-orange-500 rounded-xl font-medium ml-[30rem] w-1/3 p-2 text-black">Total : {total}</h1>
        </div>
        <div>
        { items?.map((item)=>{
            return (
            <CartItem key={item._id} title={item.title} Desc={item.description}
            ImageURL={item.imageURL} Price={item.productPrice} ProductID={item._id} />
            )
          })}

          {!items && (
            <h1 className="text-6xl text-white font-bold mt-[50rem]">Loading...</h1>
          )}
        </div>
        <button className="bg-orange-600 w-full p-3 text-3xl ml- font-bold text-gray-100 hover:bg-orange-700 hover:text-gray-200">Place Order</button>
      </div>
    </div>
  )
}

export default Cart
