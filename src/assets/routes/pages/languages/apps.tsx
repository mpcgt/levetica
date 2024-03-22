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
    <img alt="Firefox" height="35" width="35" src={firefox} /><h2><a>Mozilla Firefox</a></h2>
    <br />
      <h4><div color='blue'>Navigateur web </div><div color='green'>Gratuit • Open Source</div></h4>
    <br /> 
      <h3>Navigateur web libre et open source, issu de la suite d'applications Mozilla. Firefox est très extensible, avec des milliers d'extensions tierces disponibles.</h3>
  <br />
  <br />
      <h2><b>Les fonctionnalités de Firefox :</b></h2>
  <br />
      <h3>• Synchronisation dans le cloud : Synchronisez vos données (favoris, mots de passes, cookies, etc.) sur vos différents appareils et vers le cloud.</h3>
  <br />
      <h3>• Mode sombre : Firefox prend en charge le mode sombre pour une utilisation confortable dans des conditions de faible luminosité.</h3>
  <br />
      <h3>• Axé sur la confidentialité : Firefox est considéré comme une alternative respectueuse de la vie privée.</h3>
  <br />
      <h3>• Bloque les traqueurs : Firefox dispose d'une fonctionnalité permettant d'empêcher les trackers de vous suivre.</h3>
  <br />
      <h3>• Extensible par plugins/extensions : Firefox peut être étendu avec des modules complémentaires, des plugins et des extensions.</h3>
  </div>
    </>
    )
  }
  
  export default Apps;