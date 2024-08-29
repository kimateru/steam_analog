import React, { useState, useEffect } from 'react'
import SideNavigationPC from './components/SideNavigationPC'
import MobileNav from './components/MobileNav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import Library from './pages/Library'
import ShopNavbar from './components/ShopNavbar'
import ProductDetail from './pages/ProductDetail'
const App = () => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    handleResize(); // Call on initial render
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <main className='flex flex-col md:flex-row md:container mx-auto gap-10'>
      <BrowserRouter>
        <div className='relative w-full md:w-[20%]'>
          {isMobile ? <MobileNav /> : <SideNavigationPC />}
        </div>
        <div className='w-full relative overflow-hidden'>
          <div className='absolute top-0 left-0 w-full h-full bg-[#F6F7FF] -z-20'></div>
          <ShopNavbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/library' element={<Library />} />
            <Route path='/product/:id' element={<ProductDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  )
}

export default App
