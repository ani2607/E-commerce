import React, { useEffect,useState } from 'react';
import Card from "./Card";
import Header from "./Header";
const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

function ListItem({title,urlCategory}) {
  const [data,setdata] = useState([]);

  useEffect(()=>{
    
    const getData = async()=>{
      try{
      const result = await fetch(`${backendURL}/products/${urlCategory}`);
      console.log(result);
      setdata(result);
    }
    catch(error){
      console.log("Error",error);
    }
    }
    getData();  

  },[])
  
  return (
    <div>
      <Header title={title}/>
      <div className='text-center'>
          {/* {data.map((Item) => {
            <Card title={Item.title} Desc={Item.description} ImageURL={Item.imageURl} key={ImageURL}/>
          })} */}
          hi
          
        </div>
    </div>
  )
}

export default ListItem
