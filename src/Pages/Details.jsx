import { useState } from "react";
import style from "./Details.module.scss"

import { redirect, useOutletContext, useParams } from "react-router-dom";

export default function Details() {
    const { products, setCart, cart } = useOutletContext();
    const { id } = useParams();
    
    if (!products.some(item => item.id == id)) {
        return redirect("404")
    } 

    const product = products.find(item => item.id == id);

    const [quantity, setQuantity] = useState(1)

    function increase() {
        setQuantity(quantity => quantity + 1)
    }

    function decrease() {
        if (quantity > 0) {
            setQuantity(quantity => quantity - 1)
        }
    }

    function addToCart() {
        if (!cart.some(item => item.id === product.id)) {
            setCart([...cart, {
                quantity: quantity,
                ...product
            }]);
        } else {
            const filteredCart = cart.filter(x => x.id !== product.id);
            setCart([...filteredCart, {
                quantity: quantity,
                ...product
            }]);
        }
    }

    return (
        <main>
            
            <section className={style.wrapperMain}>

                <div className={"maxWrapper" + " " + style.main}>

                    <img src={product.image} alt="" />
                    
                    <div className={style.infos}>
                        <div>
                            <h1 className="title">{product.title}</h1>
                            <span aria-label="Prix de l'article" className={style.price}>{product.price}€</span>
                        </div>
                        <form action="POST">
                            <label htmlFor="quantity">Quantité</label>
                            <div className={style.buttons}>
                                <button className="btnQuantity" type="button" onClick={decrease}>-</button>
                                <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                                <button className="btnQuantity" type="button" onClick={increase}>+</button>
                            </div>
                            <button type="button" className="btn primary" onClick={addToCart}>J'ajoute au panier</button>
                        </form>
                    </div>
                    
                </div>
                
            </section>

            <section className={style.details}>

                <div className="maxWrapper">

                    <h2 className="title">Lorem ipsum</h2>

                    <div className={style.text}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate ligula vitae ex scelerisque, at faucibus velit fermentum. Pellentesque posuere nisi id elit varius viverra. Ut tempor auctor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida eros felis, nec elementum mi aliquam vitae. Fusce volutpat porttitor ipsum sed cursus. Donec eget mauris ex. Praesent ligula diam, viverra eu leo ut, tempor facilisis metus. Sed nec odio est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin at ex justo. Nam ullamcorper fermentum lobortis. Morbi massa nulla, ullamcorper quis porta ac, eleifend a erat. Aenean vitae tristique ligula. Suspendisse in mollis sem. Mauris vestibulum tortor enim, quis venenatis velit sodales sit amet.</p>
                        
                        <p>Praesent tempor massa at sodales sodales. Pellentesque sit amet commodo ante, blandit porta lorem. Cras pretium neque felis, fringilla commodo tortor tempor faucibus. Proin ac lectus a orci ornare porta vel nec magna. Duis tempor condimentum imperdiet. Vestibulum facilisis ac erat quis fringilla. Donec imperdiet euismod est, eget rhoncus ipsum varius vitae. Duis non sapien vitae augue posuere mattis suscipit at libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent at dictum neque, non elementum dolor. Suspendisse potenti. Sed vestibulum turpis ante, eu venenatis dolor fermentum id. Curabitur pretium elit lacus, malesuada ultrices felis dictum et. Nullam nec risus risus. Vestibulum iaculis quam ut fermentum consequat.</p>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque nisi magna. Donec vitae ex risus. Nunc dictum id sem quis elementum. Ut nibh nibh, dignissim consequat consectetur ut, fringilla commodo lorem. Maecenas id mauris ut ante cursus aliquam. Cras et interdum tellus. Ut facilisis feugiat iaculis. Nam ut diam feugiat, vulputate eros tincidunt, porta eros. Pellentesque vitae lacinia lorem. Fusce pharetra a quam vitae vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec condimentum est, eget vulputate libero. Etiam tincidunt erat diam, sit amet efficitur lorem blandit id. In quam magna, pellentesque non nibh sit amet, euismod eleifend sem. In vehicula feugiat lectus ac facilisis.</p>
                    </div>

                </div>

            </section>

        </main>
    )
}