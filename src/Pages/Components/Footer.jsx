import { Link } from "react-router-dom";
import style from "./Footer.module.scss";

export default function Footer() {
	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<footer className={style.footer}>
			<div className={"maxWrapper" + " " + style.wrapper}>
				<div className={style.content}>
					<section className={style.form}>
						<form action="POST">
							<label htmlFor="email">
								Inscrivez-vous à la newsletter pour des <strong>nouveautés</strong> et des <strong>offres exclusives</strong> :
							</label>

							<div className={style.inputEmail}>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="adresse de messagerie"
								/>
								<div className="borderBottom">
									<button type="submit" onClick={(e) => handleSubmit(e)}>Je m'abonne</button>
								</div>
							</div>

							<div className={style.inputRgpd}>
								<label htmlFor="rgpd">
									J’accepte les{" "}
									<a>conditions de confidentitalité</a>
								</label>
								<input type="checkbox" name="rgpd" id="rgpd" required />
							</div>
						</form>
					</section>

					<section className={style.navigation}>
						<nav aria-label="Navigation du pied-de-page">
							<ul>
								<li>
									<a>Politique de confidentitalité</a>
								</li>
								<li>
									<a>Conditions générales de vente</a>
								</li>
								<li>
									<a>Mentions légales</a>
								</li>
							</ul>
						</nav>
					</section>

					<section>
						<a className="borderBottom">
							Nous contacter
						</a>
					</section>

					<section className={style.socials}>
						<div className={style.icons}>
							<nav aria-label="Où nous trouver sur les réseaux sociaux">
								<ul>
									<li>
										<a>
											<img
												src="/src/assets/pinterest.svg"
												alt="Logo Pinterest"
											/>
										</a>
									</li>
									<li>
										<a>
											<img src="/src/assets/twitter.svg" alt="Logo Twitter" />
										</a>
									</li>
									<li>
										<a>
											<img src="/src/assets/facebook.svg" alt="Logo Facebook" />
										</a>
									</li>
								</ul>
							</nav>
						</div>
						<img
							src="/src/assets/payplug.png"
							alt="Logo PayPlug qui garantie un paiement sécurisé"
						/>
					</section>
				</div>

				<div className={style.credits}>© 2019 - 2021 Run'Zik SAS </div>
			</div>
		</footer>
	);
}
