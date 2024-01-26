import React from 'react';
import Navbar from '../components/Navbar';
import ItemImage from '../components/ItemImage';

function Item(props) {
  return (
    <div className='h-full w-full flex'>
      <Navbar className="m-0"/>
      <ItemImage/>

    </div>
  )
}

export default Item
