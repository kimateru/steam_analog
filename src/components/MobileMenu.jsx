
import SideNavigationeMenu from './SideNavigationeMenu'
import React from 'react'
import { BsBasket3 } from "react-icons/bs";
import { BsCart2 } from 'react-icons/bs';
import { IoLibraryOutline } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import ThemeToggle from './ThemeToggle';
import { RiHomeLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const MobileMenu = ({onClose}) => {
    return (
        <ul className='w-full mobile-menu absolute top-[100px] left-0 z-10 px-4 flex flex-col gap-10 container mx-auto bg-white'>
            <Link onClick={onClose} to={'/'}><SideNavigationeMenu borderColor="bg-blue-400" text="Home" icon={<RiHomeLine className='text-blue-400 text-3xl' />} /></Link>
            <Link onClick={onClose} to={'/cart'}><SideNavigationeMenu borderColor="bg-pink-500" text="Cart" icon={<BsBasket3 className='text-pink-500 text-3xl' />} /></Link>
            <Link onClick={onClose} to={'/library'}><SideNavigationeMenu borderColor="bg-orange-500" text="Library" icon={<IoLibraryOutline className='text-orange-500 text-3xl' />} /></Link>
            <Link onClick={onClose} to={'/shop'}><SideNavigationeMenu borderColor="bg-purple-500" text="Store" icon={<BsCart2 className='text-purple-500 text-3xl' />} /></Link>
            <div className="flex flex-col gap-5">
                <ThemeToggle />
                <hr className='ml-4' />
            </div>
            <div className="flex flex-col bottom-0 gap-5">
                <SideNavigationeMenu borderColor={"bg-blue-200"} text={"Support"} icon={<IoChatbubblesOutline className='text-blue-200 text-3xl md:text-xl lg:text-3xl' />} />
                <SideNavigationeMenu borderColor={"bg-blue-200"} text={"Settings"} icon={<IoSettingsOutline className='text-blue-200 text-3xl md:text-xl lg:text-3xl' />} />
            </div>
        </ul>
    )
}

export default MobileMenu