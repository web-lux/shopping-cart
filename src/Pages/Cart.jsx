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
                <span className={style.itemName}>Casque Confort Run'Zik</span>
                <div className={style.itemQuantity}>
                  <button className="btnQuantity">-</button>
                  <span>1</span>
                  <button className="btnQuantity">+</button>
                </div>
                <span className={style.itemPrice}>199€</span>
              </li>

              <li>
                <img src="src/assets/payplug.png" alt="" />
                <span className={style.itemName}>Casque Confort Run'Zik</span>
                <div className={style.itemQuantity}>
                  <button className="btnQuantity">-</button>
                  <span>1</span>
                  <button className="btnQuantity">+</button>
                </div>
                <span className={style.itemPrice}>199€</span>
              </li>

            </ul>
            <div className={style.sum}>
              <span>Sous total</span>
              <span>517€</span>
            </div>
            <button className={"btn primary" + " " + style.btnNext}>Renseigner l'adresse</button>
          </main>
        </div>
        
        <Banner />  
      </>
    )
  }