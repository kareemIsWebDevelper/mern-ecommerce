import { useParams } from "react-router-dom";
import AppNav from "../components/AppNav";
import { useEffect, useState } from "react";
import { getProduct } from "../lib/api/product";
import DetailsCard from "../components/cards/DetailsCard";

interface ProductI {
    _id: string;
    name: string;
    description: string;
    quantity: string;
    price: string;
    discount: number;
    color: string;
    image: string;
    category: {
        _id: string;
        name: string;
        description: string;    
    };
}    

export const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductI | undefined>(undefined);
    const productId = product?._id;
    const productName = product?.name;
    const productImage = product?.image;
    const productPrice = product?.price;
    const productDiscount = product?.discount;

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getProduct(id);
            setProduct(data);
        };
        void fetchProduct();
    }, []);

    return (
       <div className="mt-16">
        <AppNav />
        <section className="gridCenter">
            <h1>Product Details</h1>
            <DetailsCard 
                id={productId}
                name={productName}
                image={productImage}
                price={productPrice}
                discount={productDiscount}
            />
        </section>
       </div>
    )
}