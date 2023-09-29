import { Outlet } from "react-router-dom"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

export default function Root() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
