import React from 'react';
import Card from "./Card";
import Header from "./Header";

function ListItem({title}) {
  return (
    <div>
      <Header title={title}/>
      <div className='text-center'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
    </div>
  )
}

export default ListItem
