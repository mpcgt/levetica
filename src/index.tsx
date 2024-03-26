import imagePathWhite from '../src/assets/levetica-logo.png'
import dev from '../src/assets/images/dev.png'
import './App.css'
import './index.css'

function Text() {
  return (
    <>
      <div>
      <br />
    <div className='center'>
      <a href="https://levetica.vercel.app" rel="noopener" target="_blank">
          <img src={imagePathWhite} height="250" width="450" className="logo" alt="Levetica" />
        </a>
        <br />
        <a href="https://levetica.vercel.app">
          <img src="https://img.shields.io/badge/website-operational-green" alt="Site" /></a>&nbsp;&nbsp;
        <a href="https://github.com/mpcgt/levetica">
          <img src="https://img.shields.io/badge/Maintained%3F-no-red" alt="Maintenance" /></a>&nbsp;&nbsp;
          <a href="https://github.com/mpcgt/levetica/action">
            <img src="https://img.shields.io/badge/build-passing-green" alt="Version" /></a>&nbsp;&nbsp;
          <a href="https://github.com/mpcgt/levetica/releases">
            <img src="https://img.shields.io/github/v/release/mpcgt/levetica" alt="Version" /></a>&nbsp;&nbsp;
          <a href="https://github.com/mpcgt/levetica/commits/main/">
            <img src="https://img.shields.io/github/commit-activity/m/mpcgt/levetica" alt="Commit Activity" /></a>&nbsp;&nbsp;
          <a href="[https://github.com/mpcgt/levetica/issues">
            <img src="https://img.shields.io/github/issues/mpcgt/levetica" alt="Issue" /></a>&nbsp;&nbsp;
    </div>
      </div>
      <div className='center'>
      <h1 className='text'>Fini les hésitations, trouve les outils adaptés à tes besoins. 👨‍💻⚛️</h1>
    <br />
  </div>

    <div className='center'>
    <div className='border'>
    <p>
      <strong><u>Annonces de Levetica : (20/03/2024)</u></strong>
    <br />
    <br /> 
      Ce site web est actuellement en construction, ce site sera officiellement publiée en bêta le <b>1er juin 2024 à 21h</b>
  <br />
  <br />
    Vous avez atteint le site web de <b>Levetica</b>, un site web de nos recommandations des logiciels, des outils et des sites web qui sont utiles selon vos besoins des développeurs.
  <br />
  <br />
    N'hésitez pas à consulter le <a href="https://levetica.vercel.app">code source</a> du site et merci à ceux qui me soutiennent en laissant une ⭐ dans mon projet. Jetez aussi un coup d'oeil dans ce site si vous voulez en savoir plus dans Levetica. 😊
  <br />
  <br />
    <i>Max - Développeur web et créateur de Levetica</i>
  </p>
  </div>
  </div>
  <div>
  <br />
  <br />
  <div className='margin'>
  <h2>Bonjour ! 👋🏼</h2>
      <h4><b><u>Quel est le but de ce projet ?</u></b></h4>
      <p>Aider les développeurs, débutants ou expérimentés, à trouver les outils et les langages de programmation les plus adaptés à leurs besoins.</p>
  <br />
      <div className='center'>
        <img alt="Dev" height="250" width="500" src={dev} />
      </div>
  <br />
  <h4><b><u>Comment ça fonctionne ?</u></b></h4>
      <p>1. <b>Pour chaque outil et langage, le site fournit une description détaillée</b>, des exemples d'utilisation, des tutoriels et des liens vers la communauté.</p>
      <p>2. <b>Le développeur peut également consulter des articles et des guides</b> pour l'aider à choisir les meilleurs outils pour son projet.</p>
    <h4><b><u>Quels avantages ?</u></b></h4>
      <p>1. <b>Gain de temps et d'énergie :</b> le développeur n'a pas à passer des heures à rechercher les outils et les langages qui lui conviennent.</p>
      <p>2. <b>Choix éclairé :</b> le développeur a accès à toutes les informations dont il a besoin pour prendre une décision réfléchie.</p>
      <p>3. <b>Développement plus efficace :</b> le développeur utilise les outils et les langages les plus adaptés à ses besoins, ce qui lui permet de travailler plus rapidement et de manière plus productive.</p>
  <h4><b><u>Quels public ciblés ?</u></b></h4>
      <p>1. <b>Développeurs débutants</b> qui ne savent pas quels outils et langages choisir.</p>
      <p>2. <b>Développeurs expérimentés</b> qui recherchent de nouveaux outils pour améliorer leur productivité.</p>
      <p>3. <b>Étudiants en informatique</b> qui veulent découvrir les différents langages de programmation.</p>
  <br />
      A bientôt et merci à ceux qui me soutiennent en laissant une ⭐ dans mon projet sur <a href="https://levetica.vercel.app">GitHub</a> 😊
  <br />
  <br />
  </div>
  </div>
  </>
  )
}

export default Text;