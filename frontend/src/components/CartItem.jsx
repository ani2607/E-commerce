// import cardImage from '../assets/card-image.avif';
// import Cart from '../assets/Cart_White.png';

import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";
import { useState } from "react";

function CartItem({ImageURL,title,Desc,Price,ProductID}) {
    const [navigate,setNavigate] = useState(false);

    const handleClick = () => {
        setNavigate(true);
    }

    if(navigate){
        return <Navigate to={`/product/${ProductID}`} />
    }

  return (
    // <div className="mt-[90px] bg-gray-500 w-[500px] mr-10">
    // <div className="flex bg-gray-500 mb-10 rounded-2xl h-full w-6/7">
    //     <img className=" m-2 h-[350px] w-7/8 inline-block rounded-xl" src={ImageURL} alt="Product Image" />

    //     <div className="flex mr-10 ml-[0px] mt-[10px] h-20">
    //         <h1 className="text-4xl font-medium text-center">{title}</h1>
    //     </div>
    //     <div className="flex mt-[-20px] h-20">   
    //         <p className='ml-4/5 mt-[100px] w-1/2 text-center'>{Desc}</p>
            
    //     </div>
    //     <div>
    //         <h1>Price: {Price}</h1>
    //     </div>


    <div className="flex bg-gray-900 mb-10 rounded-2xl w-[77rem] m-2" onClick={handleClick}>
    <img className="m-2 h-[15rem] w-1/3 inline-block rounded-xl" src={ImageURL} alt="Product Image" />

    <div className="flex flex-col ml-4">
        <h1 className="text-4xl font-medium mt-2 ml-80">{title}</h1>
        <p className="mt-2">{Desc}</p>
        <div>
            <h1 className="text-3xl mt-10 text-center ml-40 bg-orange-600 w-[25rem] rounded-lg font-bold h-12 p-1">Price: {Price}</h1>
        </div>
    </div>
</div>











            /* <div className="flex mb-[5px] mr-10 ml-[-600px] mt-[300px] rounded-lg h-10">
            <button className="ml-2 mt-2 w-[500px] h-10 inline-block bg-orange-500 text-black  text-center rounded-lg mb-[10px] text-2xl hover:bg-orange-600 hover:font-medium">
            <button className="ml-2 mt-2 w-[500px] h-10 inline-block bg-orange-500 text-black  text-center rounded-lg mb-[10px] text-2xl hover:bg-orange-600 hover:font-medium" onClick={(e) => console.log("vsdv")}>
                Add to Cart
                <img src={Cart} alt="cart image" className=" ml-4 mt-[-9px] inline-block h-7 w-7" />
            </button>
                <button className="ml-2 mt-2 w-[500px] h-10 inline-block bg-orange-500 text-black p-2 text-center rounded-lg mb-[10px] text-xl hover:bg-orange-600 hover:font-medium">
                    Add to cart
                    <img src={Cart} alt="cart image" className=' ml-1 mt-0 inline-block h-5 w-5 ' />
                </button>
            </div> */
    // </div>
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
