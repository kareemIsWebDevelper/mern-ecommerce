import { useContext } from 'react';
import { Link } from "react-router-dom";
import { cart } from '../../assets';
import { CartContext } from '../../CartProvider';

const ItemsCart = () => {
    const { cartLength } = useContext(CartContext);

    return (
        <Link to={"/cart"} className="relative mt-2 ml-4">
            <img src={cart} alt="cart" className='w-6 h-6 mt-0.5' />
            <span className="bgRed text-white rounded-full bold text-sm w-5 h-5 flexCenter absolute -top-4 -left-2">
                { cartLength }
            </span>
        </Link>
    )
}

export default ItemsCart