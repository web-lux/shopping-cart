import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from "./Router.jsx"
import Header from "./Pages/Header.jsx";
import Footer from "./Pages/Footer.jsx"
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Router />
    <Footer />
  </React.StrictMode>,
)
