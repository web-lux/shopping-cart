import Banner from "./Components/Banner";
import style from "./Cart.module.scss";
import { useOutletContext } from "react-router-dom";

function CartRow({ cartItem, cart, setCart, compareId, parsePrice }) {

	function decreaseQuantity() {
		const filteredCart = cart.filter((item) => item.id !== cartItem.id);
		if (cartItem.quantity > 1) {
			setCart(
				[
					...filteredCart,
					{
						quantity: cartItem.quantity--,
						...cartItem
					},
				].sort(compareId)
			);
		} else if ((cartItem.quantity = 1)) {
			setCart(filteredCart);
		}
	}

	function increaseQuantity() {
		const filteredCart = cart.filter((item) => item.id !== cartItem.id);
		setCart([
			...filteredCart,
			{
				quantity: cartItem.quantity++,
				...cartItem
			}
		].sort(compareId))
	}

	return (
		<li>
			<img src="src/assets/payplug.png" alt="" />
			<span className={style.itemName} aria-label="Nom de l'article">
				{cartItem.title}
			</span>
			<div className={style.itemQuantity}>
				<button
					className="btnQuantity"
					aria-label="Réduire quantité"
					onClick={() => {
						decreaseQuantity();
					}}
				>
					-
				</button>
				<span aria-label="Quantité dans le panier">{cartItem.quantity}</span>
				<button
					className="btnQuantity"
					aria-label="Augmenter quantité"
					onClick={() => {
						increaseQuantity();
					}}
				>
					+
				</button>
			</div>
			<span className={style.itemPrice} aria-label="Prix de l'article">
				{parsePrice(cartItem.price * cartItem.quantity)}€
			</span>
		</li>
	);
}

export default function Cart() {
	const { cart, setCart, parsePrice } = useOutletContext();

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

	const total = cart.reduce(
		(a,b) => a + (b.quantity * b.price), 0
	)

	return (
		<>
			<div className={style.wrapper}>
				<main className={style.cart + " " + "maxWrapper"}>
					<h1 className="title">Panier</h1>

					<ul className={style.items}>
						{cart.map((cartItem) => {
							return (
								<CartRow
									cartItem={cartItem}
									key={cartItem.id}
									cart={cart}
									setCart={setCart}
									parsePrice={parsePrice}
								/>
							);
						})}
					</ul>

					<div className={style.sum}>
						<span id="sum-label">Sous-total</span>
						<span aria-aria-labelledby="sum-label">{parsePrice(total)}€</span>
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
