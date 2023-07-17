import AppNav from "../components/AppNav";
import {useState, lazy, Suspense} from "react";
import {Products} from "../lib/types";
import {getProducts} from "../lib/api/product";
import {SearchInput} from "../components/SearchInput";
import {Loading} from "../utils/Loading";
const ProductCard = lazy(() => import("../components/cards/ProductCard"));

export const Search = () => {
	const [isHidden, setIsHidden] = useState<boolean>(true);
	const [products, setProducts] = useState<Products[]>([]);
	const [searched, setSearched] = useState<string>("");

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!searched) alert("You shop all now!") ;
		void fetchProducts();
	}

	const fetchProducts = async () => {
		try {
			const data = await getProducts();

			const filteredProducts = data.filter((product) => {
				const productName = product.name.toLowerCase();
				const categoryName = product.category.name.toLowerCase();
				const searchedText = searched.toLowerCase();

				return (
					productName.includes(searchedText) ||
					categoryName.includes(searchedText)
				);
			});
			setProducts(filteredProducts);
			setIsHidden(false);
		} catch (error) {
				console.error(error);
		}
	};

	return (
		<>
			<AppNav />
			<main>
				<form
					onSubmit={handleSubmit}
					  className="mt-16 w-80 shadow-none bg-slate-100 mx-auto md:w-full gridCenter"
					>
					<div className="gridCenter">
					<SearchInput setSearched={setSearched} />
					<div>
						{isHidden &&
							<h1 className="text-center text-3xl md:text-6xl bold mt-12 w-72 md:w-[800px]">
								Search For Product<br />
								or Category
							</h1>
						}
					</div>
					</div>
				</form>
				<Suspense fallback={<Loading />}>
					<ProductCard products={products} />
				</Suspense>
			</main>
		</>
	)
}