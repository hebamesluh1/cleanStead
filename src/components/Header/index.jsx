import { useState } from 'react';
import Logo from '../../assets/images/logo.svg';

import { navigation } from '../../mock/data';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Btn from '../Btn';


export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className='fixed w-full top-0 mx-auto lg:max-w-4xl xl:max-w-5xl z-1000'>
      <div className='md:flex items-center justify-between bg-white py-4 ms:px-10 px-0'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <img src={Logo} alt="" />
          </span>
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute left-8 top-6 cursor-pointer md:hidden'>
          {open ?
            <AiOutlineClose />
            :
            <AiOutlineMenu />
          }
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            navigation.map((link) => (
              <li key={link.id} className='md:ml-8 text-xl md:my-0 my-7 overflow-hidden'>
                <Link to={link.path} className='text-headerColor hover:text-gray-400 duration-500'>{link.name}</Link>
              </li>
            ))
          }
        </ul>

        <div className="hidden md:block">
          <Btn type="button" text="احجز الآن" />
        </div>
      </div>
    </div>
  )
}
