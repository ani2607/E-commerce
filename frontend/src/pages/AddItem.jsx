import ItemHeader from '../components/Product'
import Navbar from '../components/Navbar'

function AddItem() {
  return (
    <div className="h-full w-full flex">
        <Navbar className="mt-0"/>
        <ItemHeader className="mt-[10px]"/>
    </div>
  )
}

export default AddItem
