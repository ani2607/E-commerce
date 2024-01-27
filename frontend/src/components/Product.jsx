import React from 'react'
import CardImage from '../assets/card-image.avif';

function ItemHeader() {
  return (
    <div className='h-full w-full'>
      <img src={CardImage} alt="" className='w-8/10 h-[500px]'/>
    </div>
  )
}

export default ItemHeader
