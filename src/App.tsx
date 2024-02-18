import reactLogo from './assets/react.svg'
import Navbar from './assets/components/Navbar.tsx'
import imagePath from './assets/levetica.svg'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {
  let items = ["Accueil","Alternatives","Blog","À propos"];
  return (
    <>
      <div>
        <Navbar 
        brandName='Levetica' 
        imageSrcPath={imagePath} 
        navItems={items}
        />

      <a href="https://github.com/mpcgt/levetica" target="_blank">
          <img src={imagePath} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Découvrez nos recommandations des logiciels et des OS. 👨‍💻</h1>
      <h3>Levetica + React = ❤️</h3>
      <div className="card">
        <p>
          Levetica est actuellement en construction...
        </p>
      </div>
      <p className="read-the-docs">
        Levetica dans <a href="https://github.com/mpcgt/levetica">GitHub</a>
      </p>
    <br />
    <br />
      <strong>Annonces de Levetica : (11/02/2024)</strong>
    <br />
    <br /> 
      Ce site web est actuellement en construction, ce site sera officiellement publiée en bêta à partir du <b>29 mars à 21h <i>(repoussé à 1 mois).</i></b>
  <br />
  <br />
    Vous avez atteint le site web de <b>Levetica</b>, un site web de nos recommandation des logiciels et des systèmes d'exploitation qui sont plus respectueux de la vie privée et qui sont adaptés selon vos besoins.
  <br />
  <br />
    Je vous rappelle que pour le moment, vous ne pouvez pas accéder ce site dans votre téléphone, elle n'est pour le moment compatible uniquement sur ordinateur <i>(Windows, Mac, Linux...)</i>
  <br />
  <br />
    N'hésitez pas à consulter le <a href="https://github.com/mpcgt/levetica">code source</a> du site et merci à ceux qui me soutiennent en laissant une ⭐ dans mon projet. Jetez aussi un coup d'oeil dans ce site si vous voulez en savoir plus dans Levetica. 😊
  <br />
  <br />
    <i>Max - Développeur web et créateur de Levetica</i>
  <br />
  <br />
  <br />
  <br />
  <h2>Bonjour ! 👋🏼</h2>
  <br />
  <br />
      <p><b>Le monde numérique est dominé par les GAFAM</b> (Google, Amazon, Facebook, Apple et Microsoft). Ces géants du web offrent des services pratiques et populaires, mais ils <b>soulèvent également des inquiétudes</b> concernant la confidentialité, la surveillance, l'éthique et la concentration du pouvoir.
  <br />
  <br />
        <img alt="GAFAM" height="220" width="500" src="./src/assets/images/gafam.png" />
  <br />
  <br />
      <b>C'est pourquoi j'ai créé Levetica.</b> Mon objectif est de <b>partager des informations et des réflexions sur les alternatives aux GAFAM.</b> Je souhaite encourager les gens à <b>explorer des solutions plus respectueuses de la vie privée, de l'éthique et de la diversité.</b>
  <br />
  <br />
      <b>Je crois que chacun a le droit de choisir les outils numériques qu'il utilise.</b> Levetica vise à <b>donner aux gens les moyens de s'affranchir de la dépendance aux GAFAM</b> et de construire un web plus libre et plus ouvert.
  <br />
  <br />
      <b>En explorant ces alternatives, vous pouvez réduire votre dépendance aux GAFAM et contribuer à un web plus diversifié et plus respectueux de vos données.</b>
  <br />
  <br />
      A bientôt et merci à ceux qui me soutiennent en laissant une ⭐ dans mon projet sur <a href="https://github.com/mpcgt/levetica">GitHub</a> 😊</p>
  </>
  )
}

export default App