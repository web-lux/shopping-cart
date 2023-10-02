import { Outlet } from "react-router-dom"
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx"

export default function Root() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
