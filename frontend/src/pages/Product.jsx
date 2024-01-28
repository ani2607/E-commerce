import Navbar from '../components/Navbar';
import ProductItem from '../components/ProductItem';
import { useParams } from 'react-router-dom';

function Product() {
  const {id} = useParams();
  return (
    <div className='h-full w-full flex'>
      <Navbar className="m-0"/>
       <ProductItem ProductID={id}/>
    </div>
  )
}

export default Product;