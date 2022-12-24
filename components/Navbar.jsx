/*eslint-disable*/
import React, { useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { useRouter } from 'next/router';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Link from 'next/link';

const links = [
  { name: "Home", link: "" },
  { name: "Sell a car", link: "/car-sale" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  const router = useRouter();

  return (
    <div className={`shadow-lg w-full fixed top-0 left-0 h-[60px] ${router.query.id ? 'bg-indigo-600' : 'bg-[#A5A8Ac]'} z-30`}>
      <div className={`md:flex items-center justify-between md:justify-center bg-transparent py-4 md:px-10 px-7 ${open ? 'justify-center items-center' : ''}`}>
        <div
          className='text-4xl font-semibold cursor-pointer flex items-center absolute left-1 pl-5 text-slate-800'>
          <h1 className='drop-shadow-lg'>Nasty Autos</h1>
        </div>
        <div className='text-3xl absolute right-5 top-2 cursor-pointer bg-transparent scale-125 md:hidden '>
          <MenuOutlinedIcon
            onClick={() => setOpen(!open)}
            className={open ? 'close bg-slate-700' : 'menu'}></MenuOutlinedIcon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-inherit md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-14 bg-slate-500' : 'top-[-490px]'}`}>
          {
            links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl justify-between md:my-0 my-7'>
                <a href={link.link} className='text-slate-100 hover:text-slate-600 font-[Poppins] duration-500'>{link.name}</a>
              </li>
            ))
          }
        </ul>
        <div className="absolute right-20">
          <a href='/profile'>
            <BiUserCircle size={28} className='mt-o.5 md:mr-5 cursor-pointer hover:text-slate-600' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
