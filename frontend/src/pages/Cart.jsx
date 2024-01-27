import React from 'react'
import Navbar from '../components/Navbar';
import CartItem from '../components/CartItem';

function Cart() {
  return (
    <div className=''>
      <Navbar className="m-0"/>
      <div className='absolute mt-[80px]'>
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
