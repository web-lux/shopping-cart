import style from "./Banner.module.scss"

export default function Banner() {
    return (
        <ul aria-label="Avantages de Run'zik" className={style.banner}>

            <li>
                <img src="/src/assets/truck.svg" alt="" />
                <span>Livraison gratuite en Europe</span>
            </li>

            <li>
                <img src="/src/assets/headphones.svg" alt="" />
                <span>Service après-vente réactif</span>
            </li>

            <li>
                <img src="/src/assets/shield.svg" alt="" />
                <span>Garantie 2 ans</span>
            </li>

            <li>
                <img src="/src/assets/smile.svg" alt="" />
                <span>Satisfait ou remboursé sous 15 jours</span>
            </li>

        </ul>
    )
}