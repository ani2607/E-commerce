import  { useEffect,useState } from 'react';
import Card from "./Card";
import Header from "./Header";
import PropTypes from 'prop-types';
const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

function ListItem({title,urlCategory}) {
  const [data,setData] = useState(null);

  useEffect(()=>{
    
    const getData = ()=>{
    
      fetch(`${backendURL}/products/${urlCategory}`)
      .then((res)=>{
        return res.json();
      })
      .then((product)=>{
        console.log(product);
        setData(product);
      })
      .catch((err)=>{
        console.log(err);
        alert(err.message);
      })
    }
    getData();  

  },[urlCategory])

  if(data){
    console.log(data[0]);
  }
  
  return (
    <div>
      <Header title={title}/>
      <div className='text-center'>
      
          { data?.map((item)=>{
            return (
            <Card key={item._id} title={item.title} Desc={item.description}
            ImageURL={item.imageURL} ProductID={item._id} />
            )
          })}

          {!data && (
            <h1 className="text-3xl mt-[100px]">Loading...</h1>
          )}
          
        </div>
    </div>
  )
}

export default ListItem
ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  urlCategory : PropTypes.string.isRequired
};


