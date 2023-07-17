import AppNav from "../components/AppNav";
import { useContext, useEffect, useState } from "react";
import { CartI, CartProduct } from "../lib/types";
import { getCartItems } from "../lib/api/cart";
import RemoveButton from "../components/cart/RemoveButton";
import { AppFooter } from "../components/AppFooter";
import { ReturnButton } from "../components/cart/ReturnButton";
import { CheckoutButton } from "../components/cart/CheckoutButton";
import { CheckoutCard } from "../components/cards/CheckoutCard";
import { AppContext } from "../context/AppContext";

export const Cart = () => {
  const [cartItems, setCartItems] = useState<CartI[]>([]);
  const [cartItemProducts, setCartItemProducts] = useState<CartProduct[]>([]);
  const [totalDiscount, setTotalDiscount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [toggleCheckoutList, setToggleCheckoutList] = useState<boolean>(false);

  const { isBlur } = useContext(AppContext);

  useEffect(() => {
    const fetchCartItems = async () => {
      const data = await getCartItems();
      setCartItemProducts(data.map((item) => item.product));
      setCartItems(data);
      setIsLoading(false);
      setIsVisible(true);
    };
    void fetchCartItems();
  }, []);

  useEffect(() => {
    const calculateTotalDiscount = () => {

      const total = cartItemProducts.reduce(
        (sum, item) => sum + item.discount, 0);
        
        setTotalDiscount(total);
    };
    calculateTotalDiscount();
  }, [cartItems]);

  // const handleAddToCart = (item: Product) => {
  //   const updatedCartItems = [...cartItems, item];
  //   setCartItems(updatedCartItems);
  // };

  // const handleRemoveFromCart = (item: Product) => {
  //   const updatedCartItems = cartItems.filter(cartItem => cartItem._id !== item._id);
  //   setCartItems(updatedCartItems);
  // };

  return (
    <>
      <AppNav />
      <main className={`${!isBlur ? "" : "blur-sm"} mt-16`}>
        {cartItems.length === 0 && isVisible ? (
          <section className="gridCenter">
            <strong className="red bold header">Your Cart Is Empty!</strong>
            <br />
            <ReturnButton />
          </section>
        ) : (
          <>
            <CheckoutCard
              totalDiscount={totalDiscount}
              toggleCheckoutList={toggleCheckoutList}
              setToggleCheckoutList={setToggleCheckoutList}
            />
            <div
              className={`${
                !toggleCheckoutList ? "" : "blur-sm overflow-hidden h-96"
              } gridCenter relative`}
            >
              <CheckoutButton
                toggleCheckoutList={toggleCheckoutList}
                setToggleCheckoutList={setToggleCheckoutList}
                isLoading={isLoading}
              />
              <div id="cart-items">
                {cartItemProducts.map((item) => (
                  <div key={item._id}>
                    <div>
                      <img src={item.image} alt={item.name} />
                      <div>
                        <h4>${item.discount}</h4>
                        <span>${item.price}</span>
                      </div>
                      <h4>{item.name}</h4>
                    </div>
                    <RemoveButton
                      productId={item._id}
                      cartItemProducts={cartItemProducts}
                      setCartItemProducts={setCartItemProducts}
                      setIsVisible={setIsVisible}
                      isVisible={isVisible}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
      <div
        className={`${
          cartItems.length === 0 ? "fixed bottom-0 left-0 w-full" : "mt-80"
        }`}
      >
        <AppFooter />
      </div>
    </>
  );
};
