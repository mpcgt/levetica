import reactLogo from './assets/react.svg'
import imagePath from './assets/levetica.svg'
import ang_react from '../src/assets/images/ang_react.png'
import loading from '../src/assets/images/loading.gif'
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
          <img src={imagePath} height="100" width="100" className="logo" alt="Levetica" />
        </a>
        <a href="https://react.dev" rel="noopener" target="_blank">
          <img src={reactLogo} height="100" width="100" className="logo" alt="React" />
        </a>
    </div>
      </div>
      <br />
      <div className='center'>
      <h1 className='text'>Fini les hésitations, trouve les outils adaptés à tes besoins. 👨‍💻⚛️</h1>
      <h3 className='text'>Levetica + React = ❤️</h3>
        <p className='text'>
          <i>Levetica est actuellement en construction, ce site passe de Angular à React </i><img src={ang_react} alt="Angular vers React" /><img src={loading} alt='Loading' />

        </p>
      </div>
<br />
    <div className='center'>
    <div className='border'>
    <p>
      <strong>Annonces de Levetica : (20/03/2024)</strong>
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
  <br />
  <br />
      <h4><b><u>Quel est le but de ce projet ?</u></b></h4>
  <br />
      <p>Aider les développeurs, débutants ou expérimentés, à trouver les outils et les langages de programmation les plus adaptés à leurs besoins.</p>
  <br />
      <div className='center'>
        <img alt="Dev" height="250" width="500" src={dev} />
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
      A bientôt et merci à ceux qui me soutiennent en laissant une ⭐ dans mon projet sur <a href="https://levetica.vercel.app">GitHub</a> 😊
  <br />
  <br />
  </div>
  </div>
  </>
  )
}

export default Text;