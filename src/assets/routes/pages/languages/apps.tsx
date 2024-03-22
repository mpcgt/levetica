import '../pages.css'
import firefox from '../images/firefox.png'

function Apps() {
    return (
      <>
      <div>
       <div className='center' />
        <h1>Bientôt disponible !</h1>
    </div>
    <div className='border'>
      <div className='margin'>
      <div className='float'>
    <img alt="Firefox" height="70" width="70" src={firefox} /><h2><a href='https://www.mozilla.org/fr/firefox/new/' target='_blank'>Mozilla Firefox</a></h2>
      </div>
      <h4><i>Navigateur web | Gratuit • Open Source</i></h4>
      <h3>Navigateur web libre et open source, issu de la suite d'applications Mozilla. Firefox est très extensible, avec des milliers d'extensions tierces disponibles.</h3>
  <br />
      <h2><b>Les fonctionnalités de Firefox :</b></h2>
      <h3><u>• Synchronisation dans le cloud ☁️ :</u> Synchronisez vos données (favoris, mots de passes, cookies, etc.) sur vos différents appareils et vers le cloud.</h3>
      <h3><u>• Mode sombre 🌗 :</u> Firefox prend en charge le mode sombre pour une utilisation confortable dans des conditions de faible luminosité.</h3>
      <h3><u>• Axé sur la confidentialité 🔒 :</u> Firefox est considéré comme une alternative respectueuse de la vie privée.</h3>
      <h3><u>• Bloque les traqueurs 👻 :</u> Firefox dispose d'une fonctionnalité permettant d'empêcher les trackers de vous suivre.</h3>
      <h3><u>• Extensible par plugins/extensions 🛠️ :</u> Firefox peut être étendu avec des modules complémentaires, des plugins et des extensions.</h3>
  </div>
  </div>
    </>
    )
  }
  
  export default Apps;