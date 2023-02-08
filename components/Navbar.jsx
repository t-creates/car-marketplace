/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { useRouter } from 'next/router';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const links = [
  { name: "Home", link: "/" },
  { name: "Sell a car", link: "/car-sale" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUser(JSON.parse(window.localStorage.getItem('user')));
    }
  }, []);

  return (
    <div className={`shadow-lg border-b-2 border-slate-700 w-full fixed top-[-1px] left-0 h-[65px] ${router.query.id ? 'bg-[#A5A8Ac]' : 'bg-[#A5A8Ac]'} z-30`}>
      <div className={`md:flex items-center justify-between md:justify-center bg-transparent py-4 md:px-10 px-7 ${open ? 'justify-center items-center' : ''}`}>
        <div
          className='text-4xl font-semibold cursor-pointer flex items-center absolute left-1 pl-5 text-slate-800'>
          <h1 className='drop-shadow-lg'>Car Marketplace</h1>
        </div>
        <div className='text-3xl absolute right-5 top-2 cursor-pointer bg-transparent scale-125 md:hidden '>
          <MenuOutlinedIcon
            onClick={() => setOpen(!open)}
            className={open ? 'close bg-slate-700' : 'menu'}></MenuOutlinedIcon>
        </div>

        <ul className={`md:flex md:items-center pb-0 absolute md:static bg-inherit md:z-auto z-[-1]
         left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 bg-slate-500' : 'top-[-490px]'}`}>
          {
            links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl justify-between md:my-0 my-7 md:hidden sm:grid'>
                <a href={link.link} className='text-slate-100 hover:text-slate-600 font-[Poppins] duration-500'>{link.name}</a>
              </li>
            ))
          }
          <li className='md:ml-8 text-xl justify-between md:my-0 my-7'>
            <a href='/profile' className='text-slate-100 hover:text-slate-600 font-[Poppins] duration-500'>
              {user ? user.name : 'Login'}
            </a>
          </li>
        </ul>
        {user ? (
          <div className="absolute right-5 sm:hidden md:grid">
            <a href='/profile'>
              <BiUserCircle size={28} className='md:mr-5 cursor-pointer hover:text-slate-600' />
            </a>
          </div>
        ) : (
          <div className="absolute right-5 sm:hidden md:grid">
            <a href='/profile'>
              <p size={28} className='md:mr-5 text-xl text-slate-100 font-[Poppins] cursor-pointer hover:text-slate-600'>
                Login
              </p>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;
