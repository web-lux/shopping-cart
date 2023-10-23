import { useOutletContext } from "react-router-dom"
import Banner from "./Components/Banner.jsx"
import Item from "./Components/Item.jsx"

export default function Shop() {
  const { products, setCart, cart } = useOutletContext();

  const productsList = products.map(product => {
    return (
      <Item product={product} key={product.id} setCart={setCart} cart={cart} />
    )
  })

    return (
      <>
        <Banner />
        {productsList}
      </>
    )
  }
  