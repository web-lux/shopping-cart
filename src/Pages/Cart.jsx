import Banner from "./Components/Banner";
import style from "./Cart.module.scss";
import { useOutletContext } from "react-router-dom";

export default function Cart() {
	const { cart, setCart } = useOutletContext();

	function compareId(a, b) {
		if (a.id < b.id) {
			return -1;
		} else if (a.id > b.id) {
			return 1;
		} else {
			return 0;
		}
	}

	setCart(cart.sort(compareId));

	function decreaseQuantity(id) {
		const filteredCart = cart.filter((x) => x.id !== id);
		const target = cart.find((x) => x.id == id);
		if (target.quantity > 1) {
			setCart(
				[
					...filteredCart,
					{
						quantity: target.quantity--,
						...target,
					},
				].sort(compareId)
			);
		} else if ((target.quantity = 1)) {
			setCart(filteredCart).sort(compareId);
		}
	}

	function increaseQuantity(id) {
		const filteredCart = cart.filter((x) => x.id !== id);
		const target = cart.find((x) => x.id == id);
		setCart(
			[
				...filteredCart,
				{
					quantity: target.quantity++,
					...target,
				},
			].sort(compareId)
		);
	}

	const cartList = cart.map((cartItem) => {
		return (
			<li key={cartItem.id}>
				<img src="src/assets/payplug.png" alt="" />
				<span className={style.itemName} aria-label="Nom de l'article">
					{cartItem.title}
				</span>
				<div className={style.itemQuantity}>
					<button
						className="btnQuantity"
						aria-label="Réduire quantité"
						onClick={() => {
							decreaseQuantity(cartItem.id);
						}}
					>
						-
					</button>
					<span aria-label="Quantité dans le panier">{cartItem.quantity}</span>
					<button
						className="btnQuantity"
						aria-label="Augmenter quantité"
						onClick={() => {
							increaseQuantity(cartItem.id);
						}}
					>
						+
					</button>
				</div>
				<span className={style.itemPrice} aria-label="Prix de l'article">
					{cartItem.price}€
				</span>
			</li>
		);
	});

	return (
		<>
			<div className={style.wrapper}>
				<main className={style.cart + " " + "maxWrapper"}>
					<h1 className="title">Panier</h1>

					<ul className={style.items}>{cartList}</ul>

					<div className={style.sum}>
						<span id="sum-label">Sous-total</span>
						<span aria-aria-labelledby="sum-label">517€</span>
					</div>

					<button className={"btn primary" + " " + style.btnNext}>
						Renseigner l'adresse
					</button>
				</main>
			</div>

			<Banner />
		</>
	);
}
