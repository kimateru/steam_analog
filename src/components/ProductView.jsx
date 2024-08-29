import React from 'react'
import { FaSmile } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from 'react-router-dom';
import axios from 'axios';


// notifcation
const ProductView = ({product}) => {
    
    const url = 'http://localhost:3000/cart';
    
    const handleAddProductToCart = async (product) => {
        const resGet = await axios.get(url)
        const cartProducts = resGet.data;
        const isInCart = cartProducts.some(p => p.id === product.id);
        if (!isInCart) {
            try {
                const res = await axios.post(url,product)
                console.log(res.data);
                alert("success")
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("already in cart")
        }

    }

    return (
        <div  className='flex flex-col rounded-xl p-2 bg-white justify-between h-[300px] xs:h-[400px] w-full sm:w-[48%] lg:w-[31%]'>
            <Link to={`/product/${product.id}`} className='h-[50%] xs:h-[65%]'>
                <img src={`../../public/assets/product_img/${product.game_thumbnail}`} alt={`${product.title} image`} className='rounded-xl h-full w-full object-cover' />
            </Link>
            <div className='flex items-center justify-between'>
                <div className=''>
                    <p className='font-bold'>{product.title}</p>
                    <div className='flex items-center gap-2'>
                        {
                            product.category.map((category, idx) => (
                                <div className='bg-[#F6F7FF] py-1 px-2 text-purple-500 text-sm rounded-xl' key={idx}>
                                    {category}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className=''>
                    <img
                        src={`../../public/assets/product_img/${product.game_logo}`}
                        alt={`${product.title} logo`}
                        className='rounded-xl w-[60px] h-[60px] object-cover'
                    />
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 bg-[#F6F7FF] px-3 py-1 rounded-xl'>
                    <div className='bg-emerald-600 p-2 rounded-xl'>
                        <FaSmile className='text-white text-xl' />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-sm'>Rating</span>
                        <span className='text-purple-500 font-bold'>{product.rating}</span>
                    </div>
                </div>
                <button
                 className='bg-[#5572F6] text-white px-5 py-3 rounded-xl flex items-center gap-2'
                 onClick={() => handleAddProductToCart(product)}
                 >
                    <LuShoppingCart className='text-white' />
                    <p>${product.price}</p>
                </button>
            </div>
        </div>
    )
}
export default ProductView
