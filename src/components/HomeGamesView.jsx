import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductView from './ProductView';
const HomeGamesView = () => {
    let url = 'http://localhost:3000/games';

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getAllProducts = async () => {
            let response = await axios.get(url);
            setProducts(response.data);
        }
        getAllProducts();
    }, [])
    return (
        <div className='flex mt-10 px-4 flex-wrap flex-col gap-5 sm:flex-row'>
            {
                products.map((product, idx) => (
                    <ProductView product={product} key={idx}/>
                ))
            }
        </div>
    )
}

export default HomeGamesView
