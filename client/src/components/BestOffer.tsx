import PlusButton from "./cart/PlusButton";
import { useEffect, useState } from "react";
import { Products } from "../lib/types";
import { getProducts } from "../lib/api/product";
import { Link } from "react-router-dom";

export const BestOffer = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    void fetchProducts();
  }, []);
  return (
    <>
      {products.map((p) => (
        <div
          key={p._id}
          className="text-2xl gridCenter gap-2 bg-white p-2 shadow-lg cursor-pointer"
          style={{ maxWidth: "200px", maxHeight: "250px" }}
        >
          <div className={"w-40 p-2"}>
            <div className={"gridCenter relative"}>
               <Link to={`product/${p._id}`}>
                <img className={"w-36 h-28"} src={p.image} alt={p.name} />
              </Link>
              <PlusButton productId={p._id} />
            </div>
            <div className="gridCenter">
              <div className="flexStart gap-2">
                <h4 className="bold text-sm">${p.discount}</h4>
                <span
                  className="font-light line-through
                        text-slate-400 text-sm md:text-lg"
                >
                  ${p.price}
                </span>
              </div>
              <h4 className="text-xl md:text-2xl text-center">{p.name}</h4>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
