import React from 'react'
import {Link} from "react-router-dom"
function Card() {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 inline-block m-2">
    <Link  to="/login">
    <img className="rounded-t-lg object-fill" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Item Image" />
    <div className="p-5">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Item Title here</h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Item Description. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id distinctio, veritatis voluptates quos ab at incidunt mollitia, libero quam numquam recusandae, nesciunt earum quisquam ea aliquid commodi suscipit corporis. Quam!</p>
        {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a> */}
    </div>
</Link>

</div>
  )
}

export default Card
