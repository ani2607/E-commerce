import React from 'react'
import cardImage from '../assets/card-image.avif';
import Cart from '../assets/Cart_White.png';

function CartItem() {
  return (
    // <div className="mt-[90px] bg-gray-500 w-[500px] mr-10">
    <div className="flex bg-gray-500 mb-10 rounded-2xl h-full w-6/7">
        <img className=" m-2 h-[350px] w-7/8 inline-block rounded-xl" src={cardImage} alt="Product Image" />
        {/* <div className="flex mr-10 ml-[0px] mt-[10px] h-20">
            <h1 className="text-4xl font-medium text-center">Product Title</h1>
        </div> */}
        <div className="flex mt-[-20px] h-20">   
            <p className='ml-4/5 mt-[100px] w-1/2 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, impedit rem. Rem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum architecto incidunt odio beatae unde voluptas ex, dolore esse voluptatem quam nobis molestias saepe v architecto incidunt odio beatae unde voluptas ex, dolore esse voluptatem quam nobis molestias saepe v architecto incidunt odio beatae unde voluptas ex, dolore esse voluptatem quam nobis molestias saepe v architecto incidunt odio beatae unde voluptas ex, dolore esse voluptatem q</p>
            
        </div>
            <div className="flex mb-[5px] mr-10 ml-[-600px] mt-[300px] rounded-lg h-10">
            {/* <button className="ml-2 mt-2 w-[500px] h-10 inline-block bg-orange-500 text-black  text-center rounded-lg mb-[10px] text-2xl hover:bg-orange-600 hover:font-medium">
            <button className="ml-2 mt-2 w-[500px] h-10 inline-block bg-orange-500 text-black  text-center rounded-lg mb-[10px] text-2xl hover:bg-orange-600 hover:font-medium" onClick={(e) => console.log("vsdv")}>
                Add to Cart
                <img src={Cart} alt="cart image" className=" ml-4 mt-[-9px] inline-block h-7 w-7" />
            </button> */}
                {/* <button className="ml-2 mt-2 w-[500px] h-10 inline-block bg-orange-500 text-black p-2 text-center rounded-lg mb-[10px] text-xl hover:bg-orange-600 hover:font-medium">
                    Add to cart
                    <img src={Cart} alt="cart image" className=' ml-1 mt-0 inline-block h-5 w-5 ' />
                </button> */}
            </div>
    </div>
  )
}

export default CartItem
