import AddToCartButton from "../cart/AddToCartButton";

const DetailsCard = 
    ({
        image,
        discount,
        price,
        name,
        id
    }) => {
  return (
    <section className="gap-8">
        <div className={
            "bg-white gridStart mb-4 w-82 h-fit p-4 border shadow-lg cursor-pointer"
        }>
          <img className="w-56 h-44" src={image} alt="product" />
          <div className="flexAround gap-2">
            <h4 className="font-extrabold">
              ${discount}
            </h4>
            <span
              className="font-light line-through text-slate-400 text-sm md:text-lg">
              ${price}
            </span>
          </div>
          <h4 className="text-center">
            {name}
          </h4>
          <AddToCartButton productId={id} />
        </div>
    </section>
  );
};

export default DetailsCard;
