import { useNavigate } from 'react-router-dom';
import NavbarTools from "./NavBarTools"
import Logo from "/src/assets/lvtcw.png"
import transitionTools from "./pages/transitionTools"

import React from './images/react.png'
import Angular from './images/angular.png'
import Vue from './images/vue.png'
import Ubuntu from './images/ubuntu.png'
import GPT from './images/chatgpt.png'
import GitHub from './images/github.png'

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

// eslint-disable-next-line react-refresh/only-export-components
function Tools() {
  const navigate = useNavigate();
  return (
    <>
    <NavbarTools />
<main className="container">
  <div className="d-flex align-items-center p-3 my-3 text-white bg-success rounded shadow-sm">
    <img className="me-3" src={Logo} alt="" width="48" height="38" />
    <div className="lh-1">
      <h1 className="h6 mb-0 text-white lh-1">Levetica</h1>
      <small>v.1.3.0-beta.14</small>
    </div>
  </div>

  <div className="my-3 p-3 bg-secondary bg-opacity-25 rounded shadow-sm">
    <h6 className="border-bottom pb-2 text-start text-light fw-bold">Dernières mises à jour</h6>
    <div className="d-flex text-body-secondary pt-3">
      <img src={React} width={50} />
      <p className="pb-3 ms-3 mb-0 small lh-sm border-bottom text-light">
        <strong className="d-block text-gray-dark text-start text-light">React</strong>
        Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état.</p>
        <button className='ms-3 btn btn-secondary' onClick={() => navigate("/react")}>Voir</button>
    </div>
    <div className="d-flex text-body-secondary pt-3">
      <img src={Angular} width={50} />
      <p className="pb-3 ms-3 mb-0 small lh-sm border-bottom text-light">
        <strong className="d-block text-gray-dark text-start text-light">Angular</strong>
        Angular est un framework open source écrit en TypeScript qui permet de créer des applications web modernes et performantes.
      </p>
      <button className='ms-3 btn btn-secondary' onClick={() => navigate("/angular")}>Voir</button>
      </div>
    <div className="d-flex text-body-secondary pt-3">
      <img src={Vue} width={50} />
      <p className="pb-3 ms-3 mb-0 small lh-sm border-bottom text-light">
        <strong className="d-block text-start text-light">Vue</strong>
        Vue.js est un framework JavaScript populaire qui facilite la création d'interfaces utilisateur interactives et d'applications web modernes.
      </p>
      <button className='ms-3 btn btn-secondary' onClick={() => navigate("/vue")}>Voir</button>
    </div>
    <small className="d-block text-end mt-3">
      <a className="text-light" href="#">Autre page</a>
    </small>
  </div>

  <div className="my-3 p-3 bg-secondary bg-opacity-25 rounded shadow-sm">
    <h6 className="border-bottom pb-2 mb-0 text-start fw-bold">Tendances actuelles</h6>
    <div className="d-flex text-body-secondary pt-3">
    <img src={Ubuntu} width={70} />
    <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div className="d-flex justify-content-between">
          <strong className="text-light">&nbsp;&nbsp;Ubuntu</strong>
        </div>
        <span className="d-block text-start text-light">
        &nbsp;&nbsp;Ubuntu est une distribution Linux gratuite et conviviale, dérivée de Debian, destinée aux ordinateurs personnels, serveurs et objets connectés.<button className='ms-3 btn btn-secondary' onClick={() => navigate("/error")}>Voir</button></span>
      </div>
    </div>
    <div className="d-flex text-body-secondary pt-3">
      <img src={GPT} width={70} />
      <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div className="d-flex justify-content-between">
          <strong className="text-light">ChatGPT</strong>
        </div>
        <span className="d-block text-start text-light">ChatGPT est un chatbot utilisant l'intelligence artificielle générative, capable de dialoguer avec vous de manière fluide et informative, en s'appuyant sur un immense corpus de données textuelles.<button className='ms-3 btn btn-secondary' onClick={() => navigate("/error")}>Voir</button></span>
      </div>
    </div>
    <div className="d-flex text-body-secondary pt-3">
    <img src={GitHub} width={70} />
      <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div className="d-flex justify-content-between">
          <strong className="text-light">GitHub</strong>
        </div>
        <span className="d-block text-start text-light">GitHub est une plateforme en ligne qui permet aux développeurs de stocker, gérer et collaborer sur des projets de code source en utilisant le système de contrôle de version Git.<button className='ms-3 btn btn-secondary' onClick={() => navigate("/error")}>Voir</button></span>
      </div>
    </div>
    <small className="d-block text-end mt-3">
      <a className="text-light" href="#">Autre page</a>
    </small>
  </div>
  </main>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default transitionTools(Tools);
