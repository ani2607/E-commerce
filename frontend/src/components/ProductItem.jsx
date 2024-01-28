import React from 'react';
import cartImage from '../assets/Cart_White.png';
import ProductImage from "../assets/card-image.avif";
import { useDispatch} from 'react-redux';
import { addItem } from '../redux/slice/cartSlice';

function ItemImage(props) {
  const dispatch = useDispatch();
  return (
    <div className=" ml-20 mt-[100px] bg-gray-500 h-[470px] w-[1800px] rounded-lg justify-left flex mr-0 ">
      <img src={ProductImage} alt="Product Image" className="rounded-lg h-[450px] w-[550px] m-2" />
      <h1 className="flex justify-center ml-[470px] mt-[30px] text-5xl font-medium w-[700px] absolute text-black">Product Title</h1>
      <p className='flex justify-center text-center mt-[120px] ml-[590px] mr-[200px] absolute text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, dolorem distinctio numquam quia culpa quibusdam ratione tempore labore maiores repellendus veniam fugit consequuntur amet in incidunt ullam! Molestiae, eius maxime!
      Eos repellat vel dolor nulla voluptates molestias, eligendi vero blanditiis error minima? Eveniet maxime in porro dignissimos libero eligendi doloribus explicabo rerum, obcaecati, sint eos soluta nisi id culpa quia!</p>
      {/* <button className="flex justify-center pt-1 bg-orange-600 h-10 w-[480px] text-2xl mt-[400px] mx-[10px] rounded-lg hover:bg-orange-700" onClick={e=>dispatch(addItem({name:props.productName, price: props.price}))}> */}
      <button className="flex justify-center pt-1 bg-orange-600 h-10 w-[480px] text-2xl mt-[400px] mx-[10px] rounded-lg hover:bg-orange-700" onClick={(e)=>{dispatch(addItem({name:"product Item 1", price: 100}));console.log("here")}}>
      {/* <button className="flex justify-center pt-1 bg-orange-600 h-10 w-[480px] text-2xl mt-[400px] mx-[10px] rounded-lg hover:bg-orange-700"> */}
        Add to Cart
        <img src={cartImage} alt="cart image" className=" ml-2 h-8 w-8" />
        </button>
    </div>
  )
}

export default ItemImage;
