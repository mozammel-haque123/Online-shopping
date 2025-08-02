import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine, RiMenuLine, RiCloseLine } from "react-icons/ri";
import { GiSelfLove } from "react-icons/gi";
import { MdOutlineShoppingBag } from "react-icons/md";
import navlogo from '../../assets/navlog.png';
import Hover1 from '../Hover1/Hover1';
import Hover2 from '../Hover2/Hover2';
import news from '../../assets/removebg.png';
import hot from '../../assets/hotyellow.png'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openHome, setOpenHome] = useState(false);
  const [openPages, setOpenPages] = useState(false);
  const [openProducts, setProducts] = useState(false);
  const [openShop, setShop] = useState(false);
  const [openBlogs, setBlogs] = useState(false);
  const [openGallery, setGallery] = useState(false);

  // Delay timer refs
  const homeTimer = useRef(null);
  const pagesTimer = useRef(null);
  const productsTimer = useRef(null);
  const blogsTimer = useRef(null);
  const galleryTimer = useRef(null);

  // Handlers for desktop hover
  const handleEnter = (timerRef, setter) => {
    clearTimeout(timerRef.current);
    setter(true);
  };
  const handleLeave = (timerRef, setter) => {
    timerRef.current = setTimeout(() => setter(false), 100);
  };

  return (
    <nav className="bg-white mb-6 mt-8 relative">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={navlogo} alt="Logo" className="h-8 w-40" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Home */}
            <div
              onMouseEnter={() => handleEnter(homeTimer, setOpenHome)}
              onMouseLeave={() => handleLeave(homeTimer, setOpenHome)}
            >
              <NavLink className="flex items-center font-bold hover:text-blue-600">
                Home <RiArrowDropDownLine className="ml-1 text-2xl" />
              </NavLink>
              {openHome && (
                <div className="absolute top-9 left-0 right-0 flex justify-center border rounded shadow-lg z-20">
                  <Hover1 />
                </div>
              )}
            </div>

            {/* Pages and nested Products */}
            <div
              onMouseEnter={() => handleEnter(pagesTimer, setOpenPages)}
              onMouseLeave={() => handleLeave(pagesTimer, setOpenPages)}
              className="relative"
            >
              <NavLink className="flex items-center font-semibold hover:text-blue-600">
                Pages <RiArrowDropDownLine className="ml-1 text-2xl" />
              </NavLink>
              {openPages && (
                <div className="absolute top-full mt-2 bg-white p-4 rounded shadow-lg z-20 w-48">
                  <ul className="space-y-2">
                    <li className="hover:text-blue-600">About Us</li>
                    <li className="hover:text-blue-600">Contact</li>
                    <li className="hover:text-blue-600">FAQ</li>
                    <li className="hover:text-blue-600">Terms & Conditions</li>
                    {/* Nested Products */}
                    <li className="pt-2 border-t border-gray-200">
                      <div
                        onMouseEnter={() => handleEnter(productsTimer, setProducts)}
                        onMouseLeave={() => handleLeave(productsTimer, setProducts)}
                        className="relative"
                      >
                        <div className="flex items-center cursor-pointer hover:text-blue-600">
                          Products <RiArrowDropDownLine className="ml-1 text-xl" />
                        </div>
                        {openProducts && (
                          <div className="absolute left-full top-0 ml-2 bg-white p-4 rounded shadow-lg w-40">
                            <ul className="space-y-2">
                              <li className="hover:text-blue-600">Category 1</li>
                              <li className="hover:text-blue-600">Category 2</li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Shop */}
            <div
              onMouseEnter={() => handleEnter(productsTimer, setShop)}
              onMouseLeave={() => handleLeave(productsTimer, setShop)}
              className="relative"
            >
              <NavLink className="flex items-center font-semibold hover:text-blue-600">
                Shop <RiArrowDropDownLine className="ml-1 text-2xl" />
              </NavLink>
              {openShop && (
                <div className="absolute top-full mt-2 bg-white p-4 rounded shadow-lg z-20 w-40">
                  <ul className="space-y-2">
                    <li className="hover:text-blue-600">Shop</li>
                    <li className="hover:text-blue-600">Product Details</li>
                  </ul>
                </div>
              )}
             <img className="w-15 absolute -top-10 hidden md:block" src={news} alt="news" />

            </div>

            {/* Blogs */}
            <div
              onMouseEnter={() => handleEnter(blogsTimer, setBlogs)}
              onMouseLeave={() => handleLeave(blogsTimer, setBlogs)}
              className="relative"
            >
              <NavLink className="flex items-center font-semibold hover:text-blue-600">
                Blogs <RiArrowDropDownLine className="ml-1 text-2xl" />
              </NavLink>
              {openBlogs && (
                <div className="absolute top-full mt-2 bg-white p-4 rounded shadow-lg z-20 w-40">
                  <ul className="space-y-2">
                    <li className="hover:text-blue-600">Blog</li>
                    <li className="hover:text-blue-600">Single Blog</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Gallery */}
              <div
              onMouseEnter={() => handleEnter(galleryTimer, setGallery)}
              onMouseLeave={() => handleLeave(galleryTimer, setGallery)}
            >
              <NavLink className="flex items-center font-semibold hover:text-blue-600">
                Gallery <RiArrowDropDownLine className="ml-1 text-2xl" />
              </NavLink>
              {openGallery && (
                <div className="absolute top-full mt-0 right-0 left-0 flex justify-center md:transform-none  lg:right-0 p-4 rounded shadow-lg z-20">
                  <Hover2 />
                </div>
              )}

               <img className="w-15 absolute -top-5 hidden md:block" src={hot} alt="news" />
            </div>

            {/* Donate / Icons */}
               <button className="w-full text-left py-2 flex items-center justify-between font-semibold hover:text-blue-600">Donate <RiArrowDropDownLine className="text-2xl border-1 rounded-full sm:border sm:border-gray-300 md:border-0        
  "
/> </button>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <GiSelfLove className="text-4xl" />
              <span className="absolute -top-1 -right-2 bg-gray-200 rounded-full w-4 h-4 text-xs text-center">0</span>
            </div>
            <div className="relative">
              <MdOutlineShoppingBag className="text-4xl" />
              <span className="absolute -top-1 -right-2 bg-amber-300 rounded-full w-4 h-4 text-xs text-white text-center">0</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 focus:outline-none mr-20">
              {mobileOpen ? <RiCloseLine className="text-2xl" /> : <RiMenuLine className="text-2xl" />}
            </button>

           
             <div className="flex items-center space-x-4 pt-2">
              <div className="relative">
                <GiSelfLove className="text-2xl" />
                <span className="absolute -top-1 -right-2 bg-gray-200 rounded-full w-4 h-4 text-xs text-center">0</span>
              </div>
              <div className="relative">
                <MdOutlineShoppingBag className="text-2xl" />
                <span className="absolute -top-1 -right-2 bg-amber-300 rounded-full w-4 h-4 text-xs text-white text-center">0</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
<div
  className={`fixed top-0 left-0 h-full w-96 bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out
    ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
  `}
>

  <div className="border-b border-gray-200 px-4 pt-4 pb-2 flex justify-between items-center">
    <div className="flex items-center">
            <img src={navlogo} alt="Logo" className="h-8 w-40" />
          </div>
    <button onClick={() => setMobileOpen(false)} className="text-xl font-bold">
      ✕
    </button>
  </div>

  <div className="px-4 pt-2 pb-4 space-y-1">
    {/* Home */}
     <button
              onClick={() => setOpenHome(!openHome)}
              className="w-full text-left py-2 flex items-center justify-between font-semibold hover:text-blue-600"
            >
              Home <RiArrowDropDownLine className="text-2xl border-1 rounded-full sm:border sm:border-gray-300 md:border-0  "
/>
  </button>
    {openHome && <Hover1 />}

    {/* Pages */}
     <button
              onClick={() => setOpenPages(!openPages)}
              className="w-full text-left py-2 flex items-center justify-between font-semibold hover:text-blue-600"
            >
              Pages <RiArrowDropDownLine className="text-2xl border-1 rounded-full sm:border sm:border-gray-300 md:border-0 "
/>
</button>
               {openPages && (
              <ul className="pl-4 space-y-1">
                <li className="py-1 hover:text-blue-600">About Us</li>
                <li className="py-1 hover:text-blue-600">Contact</li>
                <li className="py-1 hover:text-blue-600">FAQ</li>
                <li className="py-1 hover:text-blue-600">Terms & Conditions</li>
                <li>
                  <button
                    onClick={() => setProducts(!openProducts)}
                    className="flex items-center justify-between w-full py-1"
                  >
                    Products <RiArrowDropDownLine className="text-2xl border-1 rounded-full sm:border sm:border-gray-300 md:border-0        
  hover:text-blue-600"
/>
                  </button>
                  {openProducts && (
                    <ul className="pl-4 space-y-1">
                      <li className="hover:text-blue-600">Category 1</li>
                      <li className="hover:text-blue-600">Category 2</li>
                    </ul>
                  )}
                </li>
              </ul>
            )}

    {/* Shop */}
         <button
              onClick={() => setShop(!openShop)}
              className="w-full text-left py-2 flex items-center justify-between font-semibold hover:text-blue-600"
            >
              Shop <RiArrowDropDownLine className="text-2xl border-1 rounded-full sm:border sm:border-gray-300 md:border-0 "
/>  </button>
        {openShop && (
              <ul className="pl-4 space-y-1">
                <li className="hover:text-blue-600">Shop</li>
                <li className="hover:text-blue-600">Product Details</li>
              </ul>
            )}

    {/* Blogs */}
        <button
              onClick={() => setBlogs(!openBlogs)}
              className="w-full text-left py-2 flex items-center justify-between font-semibold hover:text-blue-600"
            >
              Blogs <RiArrowDropDownLine className="text-2xl border-1 rounded-full sm:border sm:border-gray-300 md:border-0 "
/>  </button>
    {openBlogs && (
              <ul className="pl-4 space-y-1">
                <li className="hover:text-blue-600">Blog</li>
                <li className="hover:text-blue-600">Single Blog</li>
              </ul>
            )}

    {/* Gallery */}
       <button
              onClick={() => setGallery(!openGallery)}
              className="w-full text-left py-2 flex items-center justify-between font-semibold hover:text-blue-600"
            >
              Gallery <RiArrowDropDownLine className="text-2xl border-1 rounded-full sm:border sm:border-gray-300 md:border-0  "
/> </button>
    {openGallery && <Hover2 />}

    {/* Donate */}
           <button className="w-full text-left py-2 flex items-center justify-between font-semibold hover:text-blue-600">Donate <RiArrowDropDownLine className="text-2xl border-1 rounded-full sm:border sm:border-gray-300 md:border-0        
  "
/> </button>
  </div>
</div>

      )}
    </nav>
  );
};

export default Navbar;

