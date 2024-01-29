import cartImage from '../assets/Cart_White.png';
import {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

function ProductItem({ProductID}) {
  const [data,setData] = useState(null);

  useEffect(()=>{
    const getData = ()=>{
      fetch(`${backendURL}/products/${ProductID}`)
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

  const [color,setColor] = useState("flex justify-center pt-1 bg-orange-600 h-10 w-[480px] text-2xl mt-[400px] mx-[10px] rounded-lg hover:bg-orange-700");
  const [CartText,setCartText] = useState('Add to Cart');

  const handleCartClick = () => {

    const addItem = fetch(`${backendURL}/products/${ProductID}`,{
<<<<<<< HEAD
      method:'POST',
      'content-type' : 'application/json',
      body : JSON.stringify({ProductID }),
=======
      method : 'POST',
      'content-type' : 'application/json',
      body : JSON.stringify({ProductID}),
>>>>>>> 3b08c941d937554defe399bfda6137ce0c14430f
    })
    .then(()=>{
      setColor("flex justify-center pt-1 bg-green-600 h-10 w-[480px] text-2xl mt-[400px] mx-[10px] rounded-lg hover:bg-green-700");
      setCartText("Item Added to Cart");
<<<<<<< HEAD
      
       setTimeout(()=>{
=======
      setTimeout(()=>{
>>>>>>> 3b08c941d937554defe399bfda6137ce0c14430f
        setColor("flex justify-center pt-1 bg-orange-600 h-10 w-[480px] text-2xl mt-[400px] mx-[10px] rounded-lg hover:bg-orange-700");
        setCartText("Add to Cart");
      },1000);
    })
    .catch((error)=>{
      console.log(error);
    })

    addItem();
<<<<<<< HEAD

=======
>>>>>>> 3b08c941d937554defe399bfda6137ce0c14430f
  }

  console.log(data);
  return (
    <div className=" ml-20 mt-[100px] bg-gray-500 h-[470px] w-[1800px] rounded-lg justify-left flex mr-0 ">
      <img src={data&&data.imageURL} alt="Product Image" className="rounded-lg h-[450px] w-[550px] m-2" />
      <h1 className="flex justify-center ml-[470px] mt-[30px] text-5xl font-medium w-[700px] absolute text-black">{data&&data.title}</h1>
      <p className='flex justify-center text-center mt-[120px] ml-[590px] mr-[200px] absolute text-lg'>{data&&data.description}</p>
      {/* <button className="flex justify-center pt-1 bg-orange-600 h-10 w-[480px] text-2xl mt-[400px] mx-[10px] rounded-lg hover:bg-orange-700" onClick={e=>dispatch(addItem({name:props.productName, price: props.price}))}> */}
      {/* <button className="flex justify-center pt-1 bg-orange-600 h-10 w-[480px] text-2xl mt-[400px] mx-[10px] rounded-lg hover:bg-orange-700" onClick={(e)=>{dispatch(addItem({name:"product Item 1", price: 100}));console.log("here")}}> */}

      <button className={color} onClick={handleCartClick}>
        {CartText}
        <img src={cartImage} alt="cart image" className=" ml-2 h-8 w-8" />
        </button>
    </div>
  )
}

export default ProductItem;
ProductItem.propTypes = {
<<<<<<< HEAD
  ProductID: PropTypes.string.isRequired,
};
=======
  ProductID : PropTypes.string.isRequired,
}
>>>>>>> 3b08c941d937554defe399bfda6137ce0c14430f
