import { Link } from "react-router-dom";
import style from "./Header.module.scss";

export default function Header() {

    return (
      <header className={style.navbar}>

        <div className={style.wrapper + " " + "maxWrapper"}>

          <img src="/src/assets/runzik.svg" alt="Logo Run'zik" />

          <nav aria-label="Navigation principale">
            <ul>
              <li>
                <Link to="/" className="borderBottom">Accueil</Link>
              </li>
              <li>
                <Link to="/">Nos produits</Link>
              </li>
              <li>
                <Link to="/">Qui sommes nous ?</Link>
              </li>
              <li>
                <Link to="/">F.A.Q</Link>
              </li>
            </ul>
          </nav>
          
          <div className={style.icons}>
            <Link to="/cart" aria-label="Panier" className={style.cart}>
              <div className={style.cartNumber}>0</div>
              <img src="/src/assets/basket.svg" alt="Panier" />
            </Link>
            <Link to="/" aria-label="Compte">
              <img src="/src/assets/account.svg" alt="Compte" />
            </Link>
          </div>

        </div>

      </header>
    )
  }