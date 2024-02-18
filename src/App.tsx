import reactLogo from './assets/react.svg'
import Navbar from './assets/components/Navbar.tsx'
import imagePath from './assets/levetica.svg'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import './index.css'

function App() {
  let items = ["Accueil","Outils","Articles","À propos"];
  return (
    <>
      <div>
        <Navbar 
        brandName='Levetica' 
        imageSrcPath={imagePath} 
        navItems={items}
        />
 
      <br />
    <div className='center'>
      <a href="https://github.com/mpcgt/levetica" target="_blank">
          <img src={imagePath} height="100" width="100" className="logo" alt="Levetica" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} height="100" width="100" className="logo" alt="React" />
        </a>
    </div>
      </div>
      <br />
      <div className='center'>
      <h1 className='text'>Fini les hésitations, trouve les outils adaptés à tes besoins. 👨‍💻</h1>
      <h3 className='text'>Levetica + React = ❤️</h3>
        <p className='text'>
          <i>Levetica est actuellement en construction, ce site passe de Angular à React </i><img alt="Loading" height="24" width="24" src="./src/assets/images/loading.gif" />

        </p>
      </div>
<br />
    <div className='center'>
    <div className='border'>
    <p>
      <strong>Annonces de Levetica : (11/02/2024)</strong>
    <br />
    <br /> 
      Ce site web est actuellement en construction, ce site sera officiellement publiée en bêta à partir du <b>29 mars à 21h <i>(repoussé à 1 mois).</i></b>
  <br />
  <br />
    Vous avez atteint le site web de <b>Levetica</b>, un site web de nos recommandations des logiciels, des outils et des sites web qui sont utiles selon vos besoins des développeurs.
  <br />
  <br />
    N'hésitez pas à consulter le <a href="https://github.com/mpcgt/levetica">code source</a> du site et merci à ceux qui me soutiennent en laissant une ⭐ dans mon projet. Jetez aussi un coup d'oeil dans ce site si vous voulez en savoir plus dans Levetica. 😊
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
  <br />
  <br />
      <h4><b><u>Quel est le but de ce projet ?</u></b></h4>
  <br />
      <p>Aider les développeurs, débutants ou expérimentés, à trouver les outils et les langages de programmation les plus adaptés à leurs besoins.</p>
  <br />
      <div className='center'>
        <img alt="Dev" height="250" width="500" src="./src/assets/images/dev.png" />
      </div>
  <br />
  <h4><b><u>Comment ça fonctionne ?</u></b></h4>
  <br />
      <p>1. <b>Pour chaque outil et langage, le site fournit une description détaillée</b>, des exemples d'utilisation, des tutoriels et des liens vers la communauté.</p>
      <p>2. <b>Le développeur peut également consulter des articles et des guides</b> pour l'aider à choisir les meilleurs outils pour son projet.</p>
  <br />
    <h4><b><u>Quels avantages ?</u></b></h4>
      <p>1. <b>Gain de temps et d'énergie :</b> le développeur n'a pas à passer des heures à rechercher les outils et les langages qui lui conviennent.</p>
      <p>2. <b>Choix éclairé :</b> le développeur a accès à toutes les informations dont il a besoin pour prendre une décision réfléchie.</p>
      <p>3. <b>Développement plus efficace :</b> le développeur utilise les outils et les langages les plus adaptés à ses besoins, ce qui lui permet de travailler plus rapidement et de manière plus productive.</p>
  <br />
  <h4><b><u>Quels public ciblés ?</u></b></h4>
  <br />
      <p>1. <b>Développeurs débutants</b> qui ne savent pas quels outils et langages choisir.</p>
      <p>2. <b>Développeurs expérimentés</b> qui recherchent de nouveaux outils pour améliorer leur productivité.</p>
      <p>3. <b>Étudiants en informatique</b> qui veulent découvrir les différents langages de programmation.</p>
  <br />
  <br />
      A bientôt et merci à ceux qui me soutiennent en laissant une ⭐ dans mon projet sur <a href="https://github.com/mpcgt/levetica">GitHub</a> 😊
  </div>
  </div>
  </>
  )
}

export default App