import Banner from "./Components/Banner";
import style from "./Cart.module.scss";
import { useOutletContext } from "react-router-dom";
import CartRow from "./Components/CartRow.jsx";
import parsePrice from "/src/Utils/parsePrice.jsx";
import compareId from "/src/Utils/compareId.jsx";
import { Link } from "react-router-dom";

export default function Cart() {
	const { cart, setCart } = useOutletContext();

	setCart(cart.sort(compareId));

	const total = cart.reduce((a, b) => a + b.quantity * b.price, 0);

	return (
		<>
			<div className={style.wrapper}>
				<main className={style.cart + " " + "maxWrapper"}>
					<h1 className="title">Panier</h1>

						{cart.length === 0 ? (
					<div className={style.content}>
							<p className={style.emptyMessage}>
								Votre panier est vide. <Link to="/">Pourquoi ne pas regarder nos articles ?</Link>
							</p>
					</div>
						) : (
							<ul className={style.items}>
								{cart.map((cartItem) => {
									return (
										<CartRow
											cartItem={cartItem}
											key={cartItem.id}
											cart={cart}
											setCart={setCart}
											parsePrice={parsePrice}
											compareId={compareId}
										/>
									);
								})}
							</ul>
						)}


					<div className={style.sum}>
						<span id="sum-label">Sous-total</span>
						<span aria-labelledby="sum-label">{parsePrice(total)}€</span>
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
