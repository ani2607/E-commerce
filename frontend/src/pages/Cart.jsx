import React from 'react'
import Navbar from '../components/Navbar';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';

function Cart() {
  const item = useSelector(state=>state);
  console.log(item);
  return (
    <div className=''>
      <Navbar className="m-0"/>
      <div className='absolute mt-[80px]'>
        <div>
          <h1 className="text-3xl flex justify-center my-5 bg-orange-500 rounded-xl font-medium ml-[500px] w-[300px] p-2 text-black">Total : 3000</h1>
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
        {/* <div>
            <Navbar/>
            <Slider/>
            <ListItem title="Mens Section"/>
            <ListItem title="Womens Section"/>
        </div> */}
      </div>
    </div>
  )
}

export default Cart
