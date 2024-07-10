import { Link } from "react-router-dom"
import { Nav } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../components/hero/hero.css";

export default function Navbar() {
    return(
    <nav className="navbar navbar-expand-lg bg-dark body-tertiary">
    <a className="navbar-brand d-flex text-start" href="#"></a><p className="ahsing mb-2 fs-2">Levetica</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="navbar-nav mx-5">
            <Nav.Link as={Link} to="/"><span className="text-light"><i className="fa-solid fa-house"></i>&nbsp;Accueil</span></Nav.Link>
            <Nav.Link as={Link} to="/products"><span className="text-light"><i className="fa-solid fa-book"></i>&nbsp;Outils</span></Nav.Link>
            <Nav.Link as={Link} to="/articles"><span className="text-light"><i className="fa-solid fa-newspaper"></i>&nbsp;Articles</span></Nav.Link>
            <Nav.Link as={Link} to="/about"><span className="text-light"><i className="fa-solid fa-circle-info"></i>&nbsp;À propos</span></Nav.Link>
            <Nav.Link as={Link} to="https://github.com/mpcgt/levetica" target="_blank"><span className="text-light"><i className="fa-brands fa-github"></i>&nbsp;GitHub</span></Nav.Link>
            <Nav.Link as={Link} to="https://levetica-vercel-app.translate.goog/?_x_tr_sl=fr&_x_tr_tl=en&_x_tr_hl=fr&_x_tr_pto=wapp"><span className="text-light"><i className="fa-solid fa-language"></i>&nbsp;English</span></Nav.Link>
      </div>
</nav>
    )
}