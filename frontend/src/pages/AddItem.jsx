import React from 'react'
import ItemHeader from '../components/ItemHeader'
import Navbar from '../components/Navbar'

function AddItem() {
  return (
    <div className="h-full w-full flex">
        <Navbar className="mt-0"/>
        <ItemHeader/>
    </div>
  )
}

export default AddItem
