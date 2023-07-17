import {useState} from "react";
import {getProducts} from "../lib/api/product";

export const SearchInput = ({setSearched}) => {
	const [options, setOptions] = useState<string[]>([]);

	const handleChange = (event) => {
		setSearched(event.target.value);
		void fetchOptions();
	};

	const fetchOptions = async () => {
		const data = await getProducts();
		const dataOptions = data.map((option) => {
			const optionName = option.name;
			const categoryName = option.category.name;

			return [optionName, categoryName];
		}).flat();

		setOptions(dataOptions);
	};

	return (
		<div className="flex justify-center items-center gap-6">
			<input
				onChange={handleChange}
				type="search"
				list="options-list"
				placeholder="Search here..."
				className={`rounded-lg bg-white md:w-96`}
			/>
			<datalist id="options-list">
				{options.map(option => (
					<option key={option} value={option} />
				))}
			</datalist>
			<button
				type="submit"
				className="rounded-lg bold bg-black text-white w-24 h-10 mb-2">
				Search
			</button>
		</div>
	)
}