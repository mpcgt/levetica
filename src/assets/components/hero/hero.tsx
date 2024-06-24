import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import LvtcLogo from "./levetica-purple.png";
import "./hero.css";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={LvtcLogo}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <div className="alert alert-light ms-5 me-5" role="alert">
          <i className="fa-solid fa-circle-info"></i>&nbsp;&nbsp;Annonce d'une nouvelle version 1.3.0 | <a href="https://github.com/mpcgt/levetica/releases/tag/v.1.3.0" target="_blank" className="alert-link decoration-none">En savoir plus&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i></a>
          </div>
          <h1 className="display-5 fw-bold text-start lh-1 mb-3 ahsing">
            Fini les hésitations, trouve les outils adaptés à tes besoins.
          </h1>
          <h5 className="text-start font fs-5">
            Les outils adaptés par langages de programmation sont des ressources
            essentielles pour les développeurs, leur permettant de travailler de
            manière efficace dans un environnement de développement spécifique à
            chaque langage en offrant des fonctionnalités telles que la syntaxe
            de coloration, la complétion automatique de code, la vérification de
            la syntaxe et le débogage.{" "}
          </h5>
          <br />
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-success btn-lg px-4 me-md-2"
              onClick={() => navigate("/products")}
            >
              Voir les outils&nbsp;&nbsp;
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            <Dropdown>
              <Dropdown.Toggle
                className="btn btn-outline-secondary text-white btn-lg"
                variant="secondary"
                id="dropdown-basic"
              >
                <i className="fa-brands fa-github"></i>&nbsp;GitHub
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="https://github.com/mpcgt/levetica"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>&nbsp;Mon projet
                </Dropdown.Item>
                <Dropdown.Item href="https://github.com/mpcgt" target="_blank">
                  <i className="fa-brands fa-github"></i>&nbsp;Mon profil
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
