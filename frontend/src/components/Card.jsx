import React from 'react'
import {Link} from "react-router-dom"
function Card() {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 inline-block m-3">
    <Link  to="/product">
    <img className="rounded-t-lg object-fill" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Item Image" />
    <div className="p-5">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Item Title here</h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Item Description. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id distinctio, veritatis voluptates quos ab at incidunt mollitia, libero quam numquam recusandae, nesciunt earum quisquam ea aliquid commodi suscipit corporis. Quam!</p>
    </div>
</Link>

</div>
  )
}

export default Card
