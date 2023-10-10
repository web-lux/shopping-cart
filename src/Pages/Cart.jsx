import Banner from "./Components/Banner";
import style from "./Cart.module.scss";

export default function Cart() {

    return (
      <>
        
        <div className={style.wrapper}>

          <main className={style.cart + " " + "maxWrapper"}>

            <h1 className="title">Panier</h1>

            <ul className={style.items}>

            <li>
                <img src="src/assets/payplug.png" alt="" />
                <span className={style.itemName} aria-label="Nom de l'article">Casque Confort Run'Zik</span>
                <div className={style.itemQuantity}>
                  <button className="btnQuantity" aria-label="Réduire quantité">-</button>
                  <span aria-label="Quantité dans le panier">1</span>
                  <button className="btnQuantity" aria-label="Augmenter quantité">+</button>
                </div>
                <span className={style.itemPrice} aria-label="Prix de l'article">199€</span>
              </li>

              <li>
                <img src="src/assets/payplug.png" alt="" />
                <span className={style.itemName} aria-label="Nom de l'article">Casque Confort Run'Zik</span>
                <div className={style.itemQuantity}>
                  <button className="btnQuantity" aria-label="Réduire quantité">-</button>
                  <span aria-label="Quantité dans le panier">1</span>
                  <button className="btnQuantity" aria-label="Augmenter quantité">+</button>
                </div>
                <span className={style.itemPrice} aria-label="Prix de l'article">199€</span>
              </li>

            </ul>

            <div className={style.sum}>
              <span id="sum-label">Sous-total</span>
              <span aria-aria-labelledby="sum-label">517€</span>
            </div>

            <button className={"btn primary" + " " + style.btnNext}>Renseigner l'adresse</button>

          </main>
          
        </div>
        
        <Banner />  
      </>
    )
  }