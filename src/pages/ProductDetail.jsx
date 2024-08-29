import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import axios from "axios";
import { Link } from "react-router-dom";
const ProductDetail = () => {
    const [product, setProduct] = useState([]);

    const { id } = useParams();
    const url = 'http://localhost:3000/games';

    useEffect(() => {
        const getAllProducts = async () => {
            let response = await axios.get(`${url}/${id}`);
            setProduct(response.data);
        }
        getAllProducts();
    }, [])

    return (
        <div className="container px-4 mx-auto mt-3">
            <Link to="/shop" className="flex items-center gap-1 text-lg">
                <FaChevronLeft className="text-[#5572F6] " />
                <span className="text-[#5572F6]">Back to Shop</span>
            </Link>
            <div className="flex flex-col gap-3 mt-2 items-center lg:flex-row lg:gap-10">
                <div>
                    <img src={`../../public/assets/product_img/${product.game_thumbnail}`} alt={`${product.title} image`} className='rounded-xl h-full w-full object-cover' />
                    <h1 className="font-bold text-xl text-center lg:text-3xl mt-2"> {product.title}</h1>
                </div>
                <div className="lg:max-w-[320px] flex flex-col gap-5 justify-center text-center">
                    <p className="text-gray-500">{product.description}</p>
                    <button className="bg-[#5572F6] text-white px-5 py-3 rounded-xl text-lg hover:bg-[#000000]">Buy {product.price}$</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail