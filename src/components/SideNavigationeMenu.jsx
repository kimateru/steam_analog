import React from 'react'

const SideNavigationeMenu = ({ borderColor, text, icon }) => {
    return (
        <div className="flex items-center justify-between">
            <div className='flex items-center gap-5'>
                <div className={`w-[5px] h-10 ${borderColor} rounded-r-lg`}></div>
                <p className='text-xl md:text-sm lg:text-xl'>{text}</p>
            </div>
            <div className='pr-2'>
                {icon}
            </div>
        </div>
    )
}

export default SideNavigationeMenu
