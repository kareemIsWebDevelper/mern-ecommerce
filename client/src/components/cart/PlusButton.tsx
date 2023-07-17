import { useContext } from "react";
import { CartContext } from "../../CartProvider";
import { addCartItem } from "../../lib/api/cart";

interface AddToCartButtonProps {
    productId: string;
}

const PlusButton = ({ productId }: AddToCartButtonProps) => {
    const { cartLength, updateCartLength } = useContext(CartContext);

    const addToCart = async (): Promise<void> => {
        await addCartItem(productId)
        updateCartLength(cartLength + 1);
    };

    return (
        <button
            onClick={addToCart}
            className={
            "bgTeal text-white flexCenter w-8 h-8 rounded-full bold text-2xl absolute -right-1 -bottom-4"
        }> +
        </button>
    );
};

export default PlusButton;