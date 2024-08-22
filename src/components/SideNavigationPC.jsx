import React from 'react'
import Logo from '../../public/assets/icons/logo.png'
import SideNavigationeMenu from './SideNavigationeMenu'
import ThemeToggle from './ThemeToggle';
import { RiHomeLine } from "react-icons/ri";
import { BsBasket3 } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { IoLibraryOutline } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const SideNavigationPC = () => {

    const location = useLocation();
    const colorLinks = (path, css) => {
        return location.pathname === path ? `${css}` : 'bg-transparent';
    }
    const iconPathChange = (path, css) => {
        return location.pathname === path ? `text-white` : `${css}`;
    }
    return (
        <aside className='w-full bg-white h-screen'>
            <div className='w-[85%]'>
                <div className="flex items-center justify-between  mt-3 md:flex-col md:gap-2 lg:flex-row">
                    <img src={Logo} alt="logo" className='w-[40px] lg:w-[30px]' />
                    <h1 className='text-2xl font-bold'>My<span className='text-blue-900'>Steam</span></h1>
                </div>
                <div className="flex flex-col gap-5 mt-8">
                    <Link to={'/'} className={colorLinks('/', 'bg-blue-400 text-white rounded-r-2xl')}>
                        <SideNavigationeMenu borderColor="bg-blue-400" text="Home" icon={<RiHomeLine className={`${iconPathChange('/', 'text-blue-400')} text-3xl md:text-xl lg:text-3xl`} />} />
                    </Link>
                    <Link to={'/cart'} className={colorLinks('/cart', 'bg-pink-500 text-white rounded-r-2xl')}>
                        <SideNavigationeMenu borderColor="bg-pink-500" text="Cart" icon={<BsBasket3 className={`${iconPathChange('/cart', 'text-pink-500')} text-3xl md:text-xl lg:text-3xl`} />} />
                    </Link>
                    <Link to={'/library'} className={colorLinks('/library', 'bg-orange-500 text-white rounded-r-2xl')}>
                        <SideNavigationeMenu borderColor="bg-orange-500" text="Library" icon={<IoLibraryOutline className={`${iconPathChange('/library', 'text-orange-500')} text-3xl md:text-xl lg:text-3xl`} />} />
                    </Link>
                    <Link to={'/shop'} className={colorLinks('/shop', 'bg-purple-500 text-white rounded-r-2xl')}>
                        <SideNavigationeMenu borderColor="bg-purple-500" text="Shop" icon={<BsCart2 className={`${iconPathChange('/shop', 'text-purple-500')} text-3xl md:text-xl lg:text-3xl`} />} />
                    </Link>
                </div>
                <div className="flex flex-col  gap-5 mt-8">
                    <ThemeToggle />
                    <hr className='ml-4' />
                </div>
                <div className="flex flex-col bottom-0  gap-5 mt-8">
                    <SideNavigationeMenu borderColor={"bg-blue-200"} text={"Support"} icon={<IoChatbubblesOutline className='text-blue-200 text-3xl md:text-xl lg:text-3xl' />} />
                    <SideNavigationeMenu borderColor={"bg-blue-200"} text={"Settings"} icon={<IoSettingsOutline className='text-blue-200 text-3xl md:text-xl lg:text-3xl' />} />
                </div>
            </div>
        </aside>
    )
}

export default SideNavigationPC
