import style from "./Item.module.scss"

export default function Item({product}) {
    return (
        <section className={style.item}>

            <div className={"maxWrapper" + " " + style.wrapper}>

                <div className={style.main}>
                    <strong aria-label="Nom de l'article" className="title borderBottom">{product.title}</strong>
                    <p aria-label="Description de l'article">
                        {product.description}
                    </p>
                    <span className={style.price} aria-label="Prix de l'article">{product.price}€</span>
                    <div className={style.buttons}>
                        <button className="btn primary">J'ajoute au panier</button>
                        <button className="btn secondary">Détails de l'article</button>
                    </div>
                
                </div>
                
                <div className={style.image}>
                    <img src={product.image} alt="Image de l'article" />
                </div>

            </div>

        </section>
    )
}