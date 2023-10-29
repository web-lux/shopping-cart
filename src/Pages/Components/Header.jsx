import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import logoImg from "../../assets/runzik.svg";
import cartImg from "../../assets/basket.svg";
import accountImg from "../../assets/account.svg";

export default function Header({ cart }) {
	return (
		<header className={style.navbar}>
			<div className={style.wrapper + " " + "maxWrapper"}>
				<img src={logoImg} alt="Logo Run'zik" />


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
						<img src={cartImg} alt="Panier" />
					</Link>
					<a aria-label="Compte">
						<img src={accountImg} alt="Compte" />
					</a>
				</div>
			</div>
		</header>
	);
}
