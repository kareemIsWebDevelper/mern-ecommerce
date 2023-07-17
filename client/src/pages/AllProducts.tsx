import AppNav from "../components/AppNav";
import {Suspense, lazy, useState, useEffect} from "react";
import { Loading } from "../utils/Loading";
import {useParams} from "react-router-dom";
import {Products} from "../lib/types";
import {getProducts} from "../lib/api/product";
const ProductCard = lazy(() =>
 import("../components/cards/ProductCard"));

export const AllProducts = () => {
    const { id } = useParams();
    const [products, setProducts] = useState<Products[]>([]);

    useEffect(() => {      
        const fetchProducts = async () => {
            const data = await getProducts();

            const filteredProducts = data.filter((product) =>
            product.category._id === id)
            setProducts(filteredProducts);
        };
        void fetchProducts();
    }, []);


    return (
      <>
        <AppNav />
        <main className={'mt-16'}>
          <Suspense fallback={<Loading />}>
            <ProductCard products={products}/>
          </Suspense>
        </main>
      </>
    );
}