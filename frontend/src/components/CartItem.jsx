// import cardImage from '../assets/card-image.avif';
// import Cart from '../assets/Cart_White.png';

import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";
import { useState } from "react";
const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

function CartItem({ImageURL,title,Desc,Price,ProductID}) {
    const [navigate,setNavigate] = useState(false);

    const handleClick = () => {
        setNavigate(true);
    }

    const handleDelete = () => {
        fetch(`${backendURL}/delete/${ProductID}`,{
            method : 'GET',
            headers: {"Content-Type": "application/json"},
            credentials : "include"
        })
    }

    if(navigate){
        return <Navigate to={`/product/${ProductID}`} />
    }

  return (

    <div className="flex bg-gray-900 mb-10 rounded-2xl w-[full] m-2">
    <img className="m-2 h-[full] w-1/3 inline-block rounded-xl hover:cursor-pointer mr-0" src={ImageURL} alt="Product Image" onClick={handleClick} />

    <div className="flex flex-col ml-4">
        <h1 className="text-4xl font-medium mt-2 hover:cursor-pointer text-center mx-[20rem] " onClick={handleClick}>{title}</h1>
        <p className="mt-2 text-center ">{Desc}</p>
        <div>
            <h1 className="text-3xl mt-10 text-center ml-40 bg-orange-600 w-[25rem] rounded-lg h-12 p-1 hover:cursor-default">Price: {Price}</h1>
        </div>
        <div>
            <button className="text-2xl mt-2 text-center ml-[13rem] bg-red-700 w-[20rem] rounded-lg h-10 p-1 hover:bg-red-800 hover:cursor-pointer" onClick={handleDelete}>Remove from Cart </button>
        </div>
    </div>
</div>
  )
}

export default CartItem;
CartItem.propTypes = {
    ImageURL : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    Desc : PropTypes.string.isRequired,
    Price : PropTypes.number.isRequired,
    ProductID : PropTypes.string.isRequired,
}
