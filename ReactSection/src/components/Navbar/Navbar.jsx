import React from 'react'
import {IoMdSearch} from "react-icons/io"; 
import {FaCartShopping} from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id:2,
    name: "Catalog",
    link: "/catalog",
  },
  {
    id:3,
    name: "About",
    link: "/About",
  },
  {
  id:4,
  name:"Profil",
  link: "/Profil",
  },
  {
    id:4,
    name:"Cart",
    link: "/Cart",
    },
]
const App = () => {
  return (
    <div>
      
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'></div>
      <div className='py-4'></div>
      <div className="container flex justify-between items-center">
      {/* {Logo and Links section} */}
      <div className='flex items-center'>
        <a href="#"
        className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
        >Tekno Hub</a>
        {/* {Menu Items} */}
        <div className='hidden lg:block'> 
          <ul className='flex items-center gap-4'>
            {MenuLinks.map((data, index) =>(
                <li key={index}>
                  <a href={data.link}
                  className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'
                  >{data.name}</a>
                </li>
                
              ))
            }
          </ul>
        </div>
      </div>
      {/* {Navbar right section} */}
      <div className="flex justify-between items-center gap-4">
        {/* {Search Bar section} */}
        <div className="relative group hidden sm:block">
          <input type="text" placeholder="Search" className="search-bar"/>
          <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200"/>
          </div>

          {/* {dark Button section} */}
          <button className="relative p-3">
          <FaCartShopping className="text-xl text-gray-600 dark:text-gray-600"/>
          <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'></div>
          </button>
        {/* {Account section} */}
        <button className="relative p-3">
          <MdAccountCircle className="text-xl text-gray-600 dark:text-gray-600"/>
          <div className='w-4 h-4 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'></div>
          </button>
      </div>
      </div>
    </div>
  )
};

export default App;