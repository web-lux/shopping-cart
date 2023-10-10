import style from "./Item.module.scss"

export default function Item() {
    return (
        <section className={style.item}>

            <div className={"maxWrapper" + " " + style.wrapper}>

                <div className={style.main}>
                    <strong aria-label="Nom de l'article" className="title borderBottom">Casque Confort Run'Zik</strong>
                    <p aria-label="Description de l'article">
                        Vous cherchez à rythmer vos séances sportives tout en restant conscient de
                        votre environnement ? Le tout nouveau casque Run’Zik assurera votre
                        sécurité sur les sentiers, dans la rue et sur les routes.
                    </p>
                    <span className={style.price} aria-label="Prix de l'article">199 €</span>
                    <div className={style.buttons}>
                        <button className="btn primary">J'ajoute au panier</button>
                        <button className="btn secondary">Détails de l'article</button>
                    </div>
                
                </div>
                
                <div className={style.image}>
                    <img src="src/assets/payplug.png" alt="Image de l'article" />
                </div>

            </div>

        </section>
    )
}