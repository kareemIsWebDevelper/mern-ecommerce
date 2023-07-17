import { useContext } from "react";
import { CartContext } from "../../CartProvider";
import { addCartItem } from "../../lib/api/cart";

interface AddToCartButtonProps {
  productId: string;
}

const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  const { cartLength, updateCartLength } = useContext(CartContext);

  const addToCart = async (): Promise<void> => {
    await addCartItem(productId)
    updateCartLength(cartLength + 1);
  };

  return (
    <button
      onClick={addToCart}
      className="bgTeal p-2 text-white bold my-2"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;