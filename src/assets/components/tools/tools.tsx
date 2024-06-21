import NavbarTools from "./NavBarTools"
import Logo from "/src/assets/lvtcw.png"
import transitionTools from "./pages/transitionTools"

import React from './images/react.png'
import Angular from './images/angular.png'
import Vue from './images/vue.png'

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

// eslint-disable-next-line react-refresh/only-export-components
function Tools() {
  return (
    <>
    <NavbarTools />
<main className="container">
  <div className="d-flex align-items-center p-3 my-3 text-white bg-success rounded shadow-sm">
    <img className="me-3" src={Logo} alt="" width="48" height="38" />
    <div className="lh-1">
      <h1 className="h6 mb-0 text-white lh-1">Levetica</h1>
      <small>v.1.3.0-beta-9</small>
    </div>
  </div>

  <div className="my-3 p-3 bg-success bg-opacity-25 rounded shadow-sm">
    <h6 className="border-bottom pb-2 text-start text-dark fw-bold">Dernières mises à jour</h6>
    <div className="d-flex text-body-secondary pt-3">
      <img src={React} width={50} />
      <p className="pb-3 ms-3 mb-0 small lh-sm border-bottom text-dark">
        <strong className="d-block text-gray-dark text-start text-dark">React</strong>
        Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état.      </p>
    </div>
    <div className="d-flex text-body-secondary pt-3">
      <img src={Angular} width={50} />
      <p className="pb-3 ms-3 mb-0 small lh-sm border-bottom text-dark">
        <strong className="d-block text-gray-dark text-start text-dark">Angular</strong>
        Angular est un framework open source écrit en TypeScript qui permet de créer des applications web modernes et performantes.
      </p>
    </div>
    <div className="d-flex text-body-secondary pt-3">
      <img src={Vue} width={50} />
      <p className="pb-3 ms-3 mb-0 small lh-sm border-bottom text-dark">
        <strong className="d-block text-start text-dark">Vue</strong>
        Vue.js est un framework JavaScript populaire qui facilite la création d'interfaces utilisateur interactives et d'applications web modernes.
      </p>
    </div>
    <small className="d-block text-end mt-3">
      <a className="text-dark" href="#">All updates</a>
    </small>
  </div>

  <div className="my-3 p-3 bg-success bg-opacity-25 rounded shadow-sm">
    <h6 className="border-bottom pb-2 mb-0 text-start fw-bold">Suggestions</h6>
    <div className="d-flex text-body-secondary pt-3">
      <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
      <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div className="d-flex justify-content-between">
          <strong className="text-dark">Full Name</strong>
          <a className="text-dark" href="#">Follow</a>
        </div>
        <span className="d-block text-start text-dark">@username</span>
      </div>
    </div>
    <div className="d-flex text-body-secondary pt-3">
      <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
      <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div className="d-flex justify-content-between">
          <strong className="text-dark">Full Name</strong>
          <a className="text-dark" href="#">Follow</a>
        </div>
        <span className="d-block text-start text-dark">@username</span>
      </div>
    </div>
    <div className="d-flex text-body-secondary pt-3">
      <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
      <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
        <div className="d-flex justify-content-between">
          <strong className="text-dark">Full Name</strong>
          <a className="text-dark" href="#">Follow</a>
        </div>
        <span className="d-block text-start text-dark">@username</span>
      </div>
    </div>
    <small className="d-block text-end mt-3">
      <a className="text-dark" href="#">All suggestions</a>
    </small>
  </div>
  </main>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default transitionTools(Tools);
