import { useEffect, useState } from "react";
import axios from "axios";
import { GoTrash } from "react-icons/go";
import { Link } from "react-router-dom";
const Cart = () => {

  let url = 'http://localhost:3000/cart';

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const getAllCartProducts = async () => {
      let response = await axios.get(url);
      setCartProducts(response.data);
    }
    getAllCartProducts();
  }, [])

  const handleDeleteCartProduct = async (id) => {
    let response = await axios.delete(`${url}/${id}`);
    setCartProducts(cartProducts.filter((product) => product.id !== id));
  }

  return (
    <div className='container mx-auto w-full flex flex-col gap-5 px-3 pt-5 max-w-[600px] xl:pt-10'>
      {

        cartProducts.length !== 0 ?
          cartProducts.map((cartProduct, idx) => (
            <div className="flex items-center justify-between" key={idx}>
              <Link to={`../product/${cartProduct.id}`}>
                <img
                  src={`../../public/assets/product_img/${cartProduct.game_logo}`}
                  alt={`${cartProduct.title} logo`}
                  className='rounded-xl w-[60px] h-[60px] object-cover cursor-pointer hover:scale-105'
                />
              </Link>
              <div className="flex items-center flex-col">
                <h1 className="font-bold text-sm">{cartProduct.title}</h1>
                <p className="text-sm">{cartProduct.price}$ </p>
              </div>
              <GoTrash
                className="text-red-700 text-2xl cursor-pointer hover:text-rose-500"
                onClick={() => handleDeleteCartProduct(cartProduct.id)}
              />
            </div>
          ))
          :
          <div className="text-center flex flex-col gap-3">
            <h1 className="text-center text-3xl font-bold mt-2">Cart is empty</h1>
            <img src="../../public/assets/icons/empty-box.png" alt="empty card" className="h-[300px] object-contain"/>
            <Link to="/shop" className="bg-[#5572F6] text-white px-5 py-3 rounded-xl">Go to Shop</Link>
          </div>

      }
    </div>
  )
}

export default Cart 

// 1) добавьте футер
// 2) добавьте в корзину динамечски отображаемую цену и возможнсоть "купить игри" которые после,хранятся у пользователя