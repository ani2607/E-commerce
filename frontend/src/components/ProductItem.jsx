import cartImage from '../assets/Cart_White.png';
import {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

function ProductItem({ProductID}) {
  const [data,setData] = useState(null);
  const [color,setColor] = useState("flex pt-1 bg-orange-600 justify-center text-center h-10 w-[20rem] text-2xl mt-[25.1rem] ml-[-35rem] rounded-lg hover:bg-orange-700");
  const [CartText,setCartText] = useState('Add to Cart');


  useEffect(()=>{
    const getData = ()=>{
      fetch(`${backendURL}/products/${ProductID}`,{
        method : 'GET',
        headers: {"Content-Type": "application/json"},
        credentials : "include"
      })
      .then((res)=>{
        return res.json();
      })
      .then((product)=>{
        setData(product[0]);
      })
      .catch((err)=>{
        console.log(err);
        alert(err.message);
      })
    };
    getData();

  },[ProductID]);


  const handleCartClick = () => {

    const addItem = fetch(`${backendURL}/products/${ProductID}`,{
      method:'POST',
      headers: {"Content-Type": "application/json"},
      body : JSON.stringify({ProductID }),
      credentials : "include"
    })
    .then(()=>{
      setColor("flex pt-1 bg-green-600 justify-center text-center h-10 w-[20rem] text-2xl mt-[25.1rem] ml-[-35rem] rounded-lg hover:bg-green-700");
      setCartText("Item Added to Cart");
      setTimeout(()=>{
        setColor("flex pt-1 bg-orange-600 justify-center text-center h-10 w-[20rem] text-2xl mt-[25.1rem] ml-[-35rem] rounded-lg hover:bg-orange-700");
        setCartText("Add to Cart");
      },1000);
    })
    .catch((error)=>{
      console.log(error);
      alert("Error while adding the product to Cart");
    })

    addItem();
  }

  console.log(data);
  return (
    <div className=" ml-2 mt-[5rem] bg-gray-900 h-[29rem] w-[78.5rem] rounded-lg justify-left flex mr-0">
      <img src={data&&data.imageURL} alt="Product Image" className="rounded-lg h-[28rem] w-[35rem] m-2 " />
      <h1 className="flex justify-center ml-[53rem] mt-[2rem] text-5xl font-medium absolute text-gray-200 ">{data&&data.title}</h1>
      <p className='flex justify-center text-center mt-[7rem] ml-[38rem] w-[38rem] h-[12rem] absolute text-lg'>{data&&data.description}</p>
      {/* <button className="flex justify-center pt-1 bg-orange-600 h-10 w-[480px] text-2xl mt-[400px] mx-[10px] rounded-lg hover:bg-orange-700" onClick={e=>dispatch(addItem({name:props.productName, price: props.price}))}> */}
      {/* <button className="flex justify-center pt-1 bg-orange-600 h-10 w-[480px] text-2xl mt-[400px] mx-[10px] rounded-lg hover:bg-orange-700" onClick={(e)=>{dispatch(addItem({name:"product Item 1", price: 100}));console.log("here")}}> */}
      <h1 className='ml-[6rem] z-10 mt-[20rem] text-3xl flex text-center justify-center h-[3rem] w-[30rem] bg-gray-600 p-1 rounded-lg'>Price : {data&&data.productPrice}</h1>
      <button className={color} onClick={handleCartClick}>
        {CartText}
        <img src={cartImage} alt="cart image" className=" ml-2 h-8 w-8" />
        </button>
      <button className='flex pt-1 bg-orange-600 justify-center text-center h-10 w-[20rem] text-2xl mt-[25.1rem] ml-2 rounded-lg hover:bg-orange-700'>
        Buy Now
        </button>
    </div>
  )
}

export default ProductItem;
ProductItem.propTypes = {
  ProductID : PropTypes.string.isRequired,
}
