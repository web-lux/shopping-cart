import { Link } from "react-router-dom";
import style from "./ErrorPage.module.scss"

export default function ErrorPage() {

    return (
      <div className={style.error}>
          <main>

            <h1>404</h1>
            <p>La page demandée n'existe pas. <Link to="/">Retourner à l'index ?</Link></p>

          </main>
      </div>
    )
  }