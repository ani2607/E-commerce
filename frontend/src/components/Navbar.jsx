const Navbar = () => {
    return (
      <nav className="flex w-full flex-nowrap items-center justify-between bg-gray-700 shadow-lg focus:text-neutral-700 lg:flex-wrap lg:py-4 fixed z-10">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="ml-2">
            <a className="text-4xl" href="/">Ecommerce</a>
          </div>
          <ul className="list-style-none mr-100 flex flex-col pl-0 lg:flex-row text-xl" >
            <li className="my-0 pl-2 px-2">
              <a href="#">
                Home
              </a>
            </li>
            <li className="my-0 pl-2 px-2">
              <a href="#">
                About
              </a>
            </li><li className="my-0 pl-2">
              <a  href="#">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaWuBqdezOEyiEtjSWbCNliFIMMjIwIpQVQ&usqp=CAU" className="m-0 w-7 h-7" alt="cart"/>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;
