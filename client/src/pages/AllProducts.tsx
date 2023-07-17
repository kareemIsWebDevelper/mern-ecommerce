import AppNav from "../components/AppNav";
import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import {Products} from "../lib/types";
import {getProducts} from "../lib/api/product";
import {ProductCard} from "../components/cards/ProductCard";

export const AllProducts = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryId = queryParams.get("id");
    const [products, setProducts] = useState<Products[]>([]);
    const [isVisible, setIsVisible] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();

            const filteredProducts = data.filter(
                (product) => product.category._id === categoryId
            );

            setProducts(filteredProducts);
            setIsVisible(false);
        };

        if (categoryId) {
            void fetchProducts();
        }
    }, [categoryId]);


    return (
      <>
        <AppNav />
        <main className={'mt-16'}>
            <ProductCard products={products} isVisible={isVisible} />
        </main>
      </>
    );
}
