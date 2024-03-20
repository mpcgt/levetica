import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/outils">Outils</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/a-propos">À propos</Link>
        </nav>
    )
}