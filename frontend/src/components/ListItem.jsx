import React from 'react'
import Card from "./Card";
import Header from "./Header"

function ListItem({title}) {
  return (
    <div>
      <Header title={title}/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
    </div>
  )
}

export default ListItem
