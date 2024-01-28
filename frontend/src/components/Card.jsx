import React from 'react'
import {Link} from "react-router-dom"
function Card({title,Desc,ImageURL,ProductID}) {
  const URL = `/product/${ProductID}`;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 inline-block m-3">
    <Link  to={URL}>
    <img className="rounded-t-lg object-fill" src={ImageURL} alt="Item Image" />
    <div className="p-5">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{Desc}</p>
    </div>
</Link>

</div>
  )
}

export default Card
