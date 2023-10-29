import style from "./Banner.module.scss";
import truckImg from "../../assets/truck.svg";
import headphoneImg from "../../assets/headphone.svg";
import shieldImg from "../../assets/shield.svg";
import smileImg from "../../assets/smile.svg";

export default function Banner() {
	return (
		<ul aria-label="Avantages de Run'zik" className={style.banner}>
			<li>
				<img src={truckImg} alt="" />
				<span>Livraison gratuite en Europe</span>
			</li>

			<li>
				<img src={headphoneImg} alt="" />
				<span>Service après-vente réactif</span>
			</li>

			<li>
				<img src={shieldImg} alt="" />
				<span>Garantie 2 ans</span>
			</li>

			<li>
				<img src={smileImg} alt="" />
				<span>Satisfait ou remboursé sous 15 jours</span>
			</li>
		</ul>
	);
}
