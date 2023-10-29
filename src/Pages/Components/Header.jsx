import { Link } from "react-router-dom";
import style from "./Header.module.scss";

export default function Header({ cart }) {
	return (
		<header className={style.navbar}>
			<div className={style.wrapper + " " + "maxWrapper"}>
				<img src="/src/assets/runzik.svg" alt="Logo Run'zik" />

				<nav aria-label="Navigation principale">
					<ul>
						<li>
							<Link to="/" className="borderBottom">
								Nos produits
							</Link>
						</li>
						<li>
							<a>Qui sommes nous ?</a>
						</li>
						<li>
							<a>F.A.Q</a>
						</li>
					</ul>
				</nav>

				<div className={style.icons}>
					<Link to="/cart" aria-label="Panier" className={style.cart}>
						<div className={style.cartNumber}>{cart.length}</div>
						<img src="/src/assets/basket.svg" alt="Panier" />
					</Link>
					<a aria-label="Compte">
						<img src="/src/assets/account.svg" alt="Compte" />
					</a>
				</div>
			</div>
		</header>
	);
}
