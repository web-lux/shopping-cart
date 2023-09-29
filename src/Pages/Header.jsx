import { Link } from "react-router-dom";

export default function Header() {

    return (
      <header>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/">Nos produits</Link></li>
            <li><Link to="/">Qui sommes nous ?</Link></li>
            <li><Link to="/">F.A.Q</Link></li>
          </ul>

          <ul>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/">Account</Link></li>
          </ul>
        </nav>
      </header>
    )
  }