import { Link } from "react-router-dom";
import style from "./Footer.module.scss";

export default function Footer() {

  return (
    <footer className={style.footer}>
      
      <div className={"maxWrapper" + " " + style.wrapper}>
        
        <div className={style.content}>

          <section className={style.form}>

            <form action="POST">

              <label htmlFor="email">Inscrivez-vous à la newsletter pour des <strong>nouveautés</strong> et des <strong>offres exclusives</strong> :</label>
              
              <div className={style.inputEmail}>
                
                <input type="email" name="email" id="email" placeholder="adresse de messagerie" />
                <div className="borderBottom">
                  <button>Je m'abonne</button>
                </div>
              
              </div>

              <div className={style.inputRgpd}>
                <label htmlFor="rgpd">J’accepte les <Link to="/">conditions de confidentitalité</Link></label>
                <input type="checkbox" name="rgpd" id="rgpd" />
              </div>
              
            </form>

          </section>

          <section className={style.navigation}>
            <nav aria-label="Navigation du pied-de-page">
              <ul>
                <li><Link to="/">Politique de confidentitalité</Link></li>
                <li><Link to="/">Conditions générales de vente</Link></li>
                <li><Link to="/">Mentions légales</Link></li>
              </ul>
            </nav>
          </section>

          <section>
            <Link to="/" className="borderBottom">Nous contacter</Link>
          </section>

          <section className={style.socials}>
            <div className={style.icons}>
              <nav aria-label="Où nous trouver sur les réseaux sociaux"> 
                <ul>
                  <li>
                    <Link to="/">
                    <img src="src/assets/pinterest.svg" alt="Logo Pinterest" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src="src/assets/twitter.svg" alt="Logo Twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src="src/assets/facebook.svg" alt="Logo Facebook" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <img src="src/assets/payplug.png" alt="Logo PayPlug qui garantie un paiement sécurisé" />
          </section>
          
        </div>
        
        <div className={style.credits}>© 2019 - 2021 Run'Zik SAS </div>

      </div>

      </footer>
    )
  }