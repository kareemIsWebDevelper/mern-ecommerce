import { createContext, useState, useEffect } from "react";

interface CartContextProps {
  cartLength: number;
  updateCartLength: (length: number) => void;
}

export const CartContext = createContext<CartContextProps>({
  cartLength: 0,
  updateCartLength: () => {},
});

const CartProvider = ({ children }) => {
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    const storedCartLength = localStorage.getItem('cartLength');
    if (storedCartLength) {
      setCartLength(Number(storedCartLength));
    }
  }, []);

  const updateCartLength = (length: number) => {
    setCartLength(length);
      localStorage.setItem('cartLength', String(length));
  };

  return (
    <CartContext.Provider value={{ cartLength, updateCartLength }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;