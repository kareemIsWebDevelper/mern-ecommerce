import { Link } from "react-router-dom";
import AddToCartButton from "../cart/AddToCartButton";

const ProductCard = ({ products }) => {
  return (
    <section className="gap-8">
      {products.map((p, _id) => (
        <div
          key={_id}
          className="bg-white gridStart mb-4 w-82 h-fit p-4 border shadow-lg cursor-pointer"
        >
          <img className="w-56 h-44" src={p.image} alt="product" />
          <div className="flexAround gap-2">
            <h4 className="font-extrabold">
              ${p.discount}
            </h4>
            <span
              className="font-light line-through text-slate-400 text-sm md:text-lg">
              ${p.price}
            </span>
          </div>
          <h4 className="text-center">
            {p.name}
          </h4>
          <AddToCartButton productId={p._id} />
        </div>
      ))}
    </section>
  );
};

export default ProductCard;
