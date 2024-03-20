import Error404 from './assets/404.svg'
import './App.css'

function Help() {
  return (
    <>
<div>
      <br />
        <br />
        <br />
        <br />
        <img src={Error404} height="100" width="100" className="logo" alt="Error 404" />
        <br />
        <br />
        <h4>D'une manière ou d'une autre, vous vous êtes perdu dans les profondeurs de l'espace.</h4><a href="https://levetica.vercel.app">Retour</a>
</div>
  </>
  )
}
export default Help;