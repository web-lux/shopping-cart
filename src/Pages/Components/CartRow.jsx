import style from "./CartRow.module.scss";
import parsePrice from "/src/Utils/parsePrice.jsx";
import compareId from "/src/Utils/compareId.jsx";

function CartRow({ cartItem, cart, setCart }) {
	function decreaseQuantity() {
		const filteredCart = cart.filter((item) => item.id !== cartItem.id);
		if (cartItem.quantity > 1) {
			setCart(
				[
					...filteredCart,
					{
						quantity: cartItem.quantity--,
						...cartItem,
					},
				].sort(compareId)
			);
		} else if ((cartItem.quantity = 1)) {
			setCart(filteredCart);
		}
	}

	function increaseQuantity() {
		const filteredCart = cart.filter((item) => item.id !== cartItem.id);
		setCart(
			[
				...filteredCart,
				{
					quantity: cartItem.quantity++,
					...cartItem,
				},
			].sort(compareId)
		);
	}

	return (
		<li className={style.cartRow}>
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

export default CartRow;
