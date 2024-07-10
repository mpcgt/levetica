import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavbarTools() {
  return (
    <nav className="navbar bg-body-secondary navbar-expand-lg">
      <a className="navbar-brand d-flex text-start" href="#"></a>
      <p className="ahsing mb-2 fs-2 text-dark">Outils</p>&nbsp;
      <small className="red ahsing">Beta</small>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-nav mx-5">
        <Nav.Link as={Link} to="/explore">
          <span className="text-dark">
            <i className="fa-solid fa-compass"></i>&nbsp;Explorer
          </span>
        </Nav.Link>
        <Nav.Link as={Link} to="/all">
          <span className="text-dark">
            <i className="fa-solid fa-screwdriver-wrench"></i>&nbsp;Tous les
            outils
          </span>
        </Nav.Link>
        <Nav.Link as={Link} to="/download">
          <span className="text-dark">
            <i className="fa-solid fa-download"></i>&nbsp;Télécharger
          </span>
        </Nav.Link>
        <Nav.Link as={Link} to="/security">
          <span className="text-dark">
            <i className="fa-solid fa-shield-halved"></i>&nbsp;Sécurité
          </span>
        </Nav.Link>
        <Nav.Link as={Link} to="https://github.com/mpcgt/levetica/discussions" target="_blank">
          <span className="text-dark">
            <i className="fa-solid fa-comments"></i>&nbsp;Communauté&nbsp;&nbsp;<i className="fa-solid fa-arrow-up-right-from-square"></i>
          </span>
        </Nav.Link>
        <Nav.Link as={Link} to="/add">
          <span className="text-dark">
            <i className="fa-solid fa-plus"></i>&nbsp;Ajouter un outil
          </span>
        </Nav.Link>
        <Nav.Link as={Link} to="/profile">
          <span className="text-dark">
            <i className="fa-solid fa-user"></i>&nbsp;Mon Profil
          </span>
        </Nav.Link>
      </div>
    </nav>
  );
}
