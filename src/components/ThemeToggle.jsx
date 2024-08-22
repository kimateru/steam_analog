import React, {useState} from 'react';
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
 
 
const ThemeToggle = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
 
    return (
        <div className='flex items-center mt-3 p-4 w-full container mx-auto'>
            {isDarkTheme ? <FiMoon className='text-yellow-500 text-3xl md:text-xl lg:text-3xl'/> : <MdOutlineWbSunny className='text-blue-500 text-3xl md:text-xl lg:text-3xl'/>}
            <div onClick={toggleTheme} className={`w-12 h-6 flex items-center rounded-full ml-4 p-1 cursor-pointer ${isDarkTheme ? 'bg-gray-200' : 'bg-gray-200'}`}>
            <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform  ${isDarkTheme ? 'border-2 border-yellow-500 bg-slate-950 translate-x-5' : 'border-2 border-blue-500'}`} />
            </div>
        </div>
       
    )
}
 
export default ThemeToggle