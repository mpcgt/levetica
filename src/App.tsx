import reactLogo from './assets/react.svg'
import lvtcLogo from './assets/levetica.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
      <a href="https://vitejs.dev" target="_blank">
          <img src={lvtcLogo} className="logo" alt="Vite logo" />
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
  </>
  )
}

export default App