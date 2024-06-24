import Hero from '../src/assets/components/hero/hero'
import transition from "../src/assets/routes/pages/transition"
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import "./index.css";

// eslint-disable-next-line react-refresh/only-export-components
function Text() {
  return (
    <>
        <Hero />

        <div className="container-home">
<p className="fs-1 text-center ahsing">
Pourquoi Levetica ?<br /></p>
<p className='fs-4 mb-5 fw-bold text-center'>Le but de Levetica est d'aider les développeurs, débutants ou expérimentés, à trouver les outils et les langages de programmation les plus adaptés à leurs besoins.</p>
<hr />
<div className="row topspace-2x mt-5 mb-5">
<figure className="col-md-3 col-sm-6 bottomspace-xs text-center">
<i className="fa-solid fa-user-check fa-4x color-accent mb-2"></i>
<p className='fs-4 fw-bold mb-2'>Votre guide</p>
<p className="text-center">Levetica vous aide à choisir les meilleurs outils, des vidéos, apprendre des langages de programmations pour votre projet et etc...</p>
</figure>
<figure className="col-md-3 col-sm-6 bottomspace-xs text-center">
<i className="fa-solid fa-clock fa-4x color-accent mb-2"></i>
<p className='fs-4 fw-bold mb-2'>Gain de temps et d'énergie</p>
<p className="text-center">Vous n'avez pas à passer des heures à rechercher les outils et les langages qui vous conviennent.</p>
</figure>
<figure className="col-md-3 col-sm-6 bottomspace-xs text-center">
<i className="fa-solid fa-lightbulb fa-4x color-accent mb-2"></i>
<p className='fs-4 fw-bold mb-2'>Choix éclairé</p>
<p className="text-center">Vous avez accès à toutes les informations dont vous avez besoin pour prendre une décision réfléchie.</p>
</figure>
<figure className="col-md-3 col-sm-6 bottomspace-xs text-center">
<i className="fa-solid fa-arrow-trend-up fa-4x color-accent mb-2"></i>
<p className='fs-4 fw-bold mb-2'>Développement plus efficace</p>
<p className="text-center">Vous utilisez les outils et les langages les plus adaptés à vos besoins, ce qui permet de travailler plus rapidement et de manière plus productive.</p>
</figure>
</div> 
</div>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default transition(Text);
