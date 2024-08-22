import { useState,useEffect } from 'react';
import Logo from '../../public/assets/icons/logo.png'
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import MobileMenu from './MobileMenu';

const MobileNav = () => {
    const [isOpenMobileMenu, setIsOpenMobile] = useState(false);
    const toggleMobileMenu = () => setIsOpenMobile(!isOpenMobileMenu);

    useEffect(() => {
        if (isOpenMobileMenu) {
            document.body.style.overflow = 'hidden';
        }else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'hidden';
        };
    }, [isOpenMobileMenu]);

    return (
        <nav className="flex items-center justify-between mt-3 p-4 w-full mx-auto">
            <div className='flex items-center gap-4'>
                <img src={Logo} alt="logo" className='w-[40px]' />
                <h1 className='text-2xl font-bold'>My<span className='text-blue-900'>Steam</span></h1>
            </div>
            {
                isOpenMobileMenu ?
                    <IoCloseOutline onClick={toggleMobileMenu} className='text-4xl text-blue-900' /> :
                    <IoIosMenu onClick={toggleMobileMenu} className='text-4xl text-blue-900' />
            }
            {isOpenMobileMenu && <MobileMenu onClose={toggleMobileMenu}/>}
        </nav>
    )
}

export default MobileNav