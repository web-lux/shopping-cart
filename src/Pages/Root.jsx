import { Outlet } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import { useEffect, useState } from "react";
import { placeholderArr } from "../Utils/placeholderProducts.jsx";

export default function Root() {
	const [products, setProducts] = useState(placeholderArr);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products?limit=2", { mode: "cors" })
			.then((res) => res.json())
			.then((res) => setProducts(res))
			.catch((err) => {
				console.error(err);
				alert("Une erreur s'est produite, merci de réessayer.");
			});
	}, []);

	return (
		<>
			<Header cart={cart} />
			<Outlet context={{ products, cart, setCart }} />
			<Footer />
		</>
	);
}
