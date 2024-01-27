import React from 'react';
import Navbar from '../components/Navbar';
import ProductItem from '../components/ProductItem';

function Item(props) {
  return (
    <div className='h-full w-full flex'>
      <Navbar className="m-0"/>
      <ProductItem/>
      console.log(props);
    </div>
  )
}

export default Item
