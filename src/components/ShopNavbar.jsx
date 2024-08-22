import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import FriendsOnline from './FriendsOnline';
const ShopNavbar = () => {
  return (
    <ul className='hidden md:flex items-center justify-between pt-4 px-4'>
      <h1 className='font-bold text-3xl'>Good day, Rayan</h1>
    <div className='flex items-center justify-between gap-5'>
        <p className='text-purple-500'>Online</p>
        <FriendsOnline/>
    </div>
    <div className='flex items-center justify-between gap-2'>
        <CiSearch className='text-2xl'/>
        <IoNotificationsOutline className='text-2xl'/>
        <MdMailOutline className='text-2xl'/>
        <img alt="" src="../../public/assets/users/4.png" className='w-[60px] rounded-full' />
    </div>
    </ul>
  )
}

export default ShopNavbar
