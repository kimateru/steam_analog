
const FriendsOnline = () => {
    return (
        <div className="flex items-center relative">
            <img src="../../public/assets/users/1.png" alt="friend 1" className='border border-white rounded-full w-[40px] h-[40px]' />
            <img src="../../public/assets/users/2.png" alt="friend 2" className='border border-white rounded-full w-[40px] h-[40px] absolute top-0 left-5' />
            <img src="../../public/assets/users/3.png" alt="friend 3" className='border border-white rounded-full w-[40px] h-[40px] absolute top-0 left-10' />
            <div className='border border-white rounded-full w-[40px] h-[40px] bg-purple-600 text-white flex items-center justify-center absolute top-0 left-16'>+8</div>
        </div>
    )
}

export default FriendsOnline
