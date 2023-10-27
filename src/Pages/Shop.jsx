import { useOutletContext } from "react-router-dom";
import Banner from "./Components/Banner.jsx";
import Item from "./Components/Item.jsx";

export default function Shop() {
	const { products } = useOutletContext();

	const productsList = products.map((product) => {
		return (
			<Item product={product} key={product.id} />
		);
	});

	return (
		<>
			<Banner />
			{productsList}
		</>
	);
}
