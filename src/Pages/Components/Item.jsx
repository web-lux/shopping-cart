import style from "./Item.module.scss";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function Item({ product }) {
	const { setCart, cart, parsePrice } = useOutletContext();

	function addToCart() {
		if (!cart.some((item) => item.id === product.id)) {
			setCart([
				...cart,
				{
					quantity: 1,
					...product,
				},
			]);
		} else return;
	}

	return (
		<section className={style.item}>
			<div className={"maxWrapper" + " " + style.wrapper}>
				<div className={style.main}>
					<strong aria-label="Nom de l'article" className="title borderBottom">
						{product.title}
					</strong>
					<p aria-label="Description de l'article">{product.description}</p>
					<span className={style.price} aria-label="Prix de l'article">
						{parsePrice(product.price)}€
					</span>
					<div className={style.buttons}>
						<button className="btn primary" onClick={addToCart}>
							J'ajoute au panier
						</button>
						<Link className="btn secondary" to={`/details/${product.id}`}>
							Détails de l'article
						</Link>
					</div>
				</div>

				<div className={style.image}>
					<img src={product.image} alt="Image de l'article" />
				</div>
			</div>
		</section>
	);
}
