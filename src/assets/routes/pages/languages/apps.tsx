import '../pages.css'
import firefox from '../images/firefox.png'
import edge from '../images/edge.png'
import vscode from '../images/vscode.png'
import github from '../images/github.png'
import win from '../images/win11.png'

function Apps() {
    return (
      <>
       <div className='center'>
        <h1>Logiciels pour Windows<img alt="Windows" height="65" width="65" src={win} /></h1>
       </div>
    <div className='border'>
      <div className='margin'>
      <div className='float'>
    <img alt="Firefox" height="70" width="70" src={firefox} /><h2><a href='https://www.mozilla.org/fr/firefox/developer/' target='_blank'>Mozilla Firefox Developer Edition</a></h2>
      </div>
      <h4><i>Navigateur web | Gratuit • Open Source</i></h4>
      <h3>Navigateur web libre et open source, obtenez les dernières fonctionnalités, de meilleures performances ainsi que les outils de développement dont vous avez besoin</h3>
  <br />
      <h2><b>Les fonctionnalités de Firefox Developer Edition :</b></h2>
      <h3><u>• Synchronisation dans le cloud ☁️ :</u> Synchronisez vos données (favoris, mots de passes, cookies, etc.) sur vos différents appareils et vers le cloud.</h3>
      <h3><u>• Mode sombre 🌗 :</u> Firefox prend en charge le mode sombre pour une utilisation confortable dans des conditions de faible luminosité.</h3>
      <h3><u>• Axé sur la confidentialité 🔒 :</u> Firefox est considéré comme une alternative respectueuse de la vie privée.</h3>
      <h3><u>• Bloque les traqueurs 👻 :</u> Firefox dispose d'une fonctionnalité permettant d'empêcher les trackers de vous suivre.</h3>
      <h3><u>• Extensible par plugins/extensions 🛠️ :</u> Firefox peut être étendu avec des modules complémentaires, des plugins et des extensions.</h3>
  </div>
  </div>

  <br />
  <br />

  <div className='border'>
      <div className='margin'>
      <div className='float'>
    <img alt="Edge" height="70" width="70" src={edge} /><h2><a href='https://developer.microsoft.com/fr-fr/microsoft-edge/?form=MA13LH' target='_blank'>Microsoft Edge Developer</a></h2>
      </div>
      <h4><i>Navigateur web | Gratuit • Propriétaire</i></h4>
      <h3>Elle est destinée à planifier et développer avec les fonctionnalités les plus récentes de Microsoft Edge. Ce canal vous permet d’avoir un coup d’œil sur les prochaines versions et de préparer la prochaine version bêta.</h3>
  <br />
      <h2><b>Les fonctionnalités de Microsoft Edge Developer :</b></h2>
      <h3><u>• Traduction des sites web ☁️ :</u> Microsoft Edge Developer utilise un traducteur intégré pour traduire le contenu dans n’importe quelle langue en temps réel.</h3>
      <h3><u>• Mode sombre 🌗 :</u> Microsoft Edge Developer prend en charge le mode sombre pour une utilisation confortable dans des conditions de faible luminosité.</h3>
      <h3><u>• Prise en charge de Chromecast 📺 :</u> Diffusez votre contenu sur un appareil connecté à Chromecast avec Microsoft Edge Developer.</h3>
      <h3><u>• Annotation PDF 📝 :</u> Prise en charge de Microsoft Edge Developers Annotation PDF pour la mise en surbrillance, les notes, etc.</h3>
      <h3><u>• Extensible par plugins/extensions 🛠️ :</u> Microsoft Edge Developers peut être étendu avec des modules complémentaires, des plugins et des extensions.</h3>
  </div>
  </div>

  <br />
  <br />

  <div className='border'>
      <div className='margin'>
      <div className='float'>
    <img alt="VSCode" height="70" width="70" src={vscode} /><h2><a href='https://code.visualstudio.com/' target='_blank'>Visual Studio Code</a></h2>
      </div>
      <h4><i>Éditeur de code | Gratuit • Open Source</i></h4>
      <h3>Visual Studio Code est un éditeur de code gratuit, open source et multiplateforme qui prend en charge de nombreux langages et fonctionnalités.</h3>
  <br />
      <h2><b>Les fonctionnalités de Visual Studio Code :</b></h2>
      <h3><u>• Prise en charge des thèmes 🎨 :</u> Vous pouvez utiliser des thèmes et des modèles pour modifier l’apparence de Visual Studio Code.</h3>
      <h3><u>• Autocomplétion ✏️ :</u> Visual Studio Code peut prédire et compléter le reste d’un mot ou d’une expression que vous tapez.</h3>
      <h3><u>• Prise en charge de Git 🛠️ :</u> Visual Studio Code prend en charge Git, un système de contrôle de version distribué gratuit et open source.  </h3>
      <h3><u>• Fonctionne hors ligne ✈️ :</u> Visual Studio Code peut être utilisé sans qu’il soit nécessaire de se connecter à Internet.</h3>
      <h3><u>• Extensible par plugins/extensions 🛠️ :</u> MVisual Studio Code peut être étendu avec des modules complémentaires, des plug-ins et des extensions.</h3>
  </div>
  </div>

  <br />
  <br />

  <div className='border'>
      <div className='margin'>
      <div className='float'>
    <img alt="GitHub" height="70" width="70" src={github} /><h2><a href='https://github.com/' target='_blank'>GitHub</a></h2>
      </div>
      <h4><i>Système de contrôle de version | Freemium • Propriétaire</i></h4>
      <h3>GitHub est un service d’hébergement de référentiels Git basé sur le Web.</h3>
  <br />
      <h2><b>Les fonctionnalités de GitHub :</b></h2>
      <h3><u>• Gestion des versions de fichiers 📂 :</u> GitHub dispose d’un système de version qui vous permet d’afficher et de revenir à des versions antérieures du projet/fichier/document.</h3>
      <h3><u>• Prise en charge de Git 🛠️ :</u> GitHub prend en charge Git, un système de contrôle de version distribué gratuit et open source.</h3>
      <h3><u>• Sans publicité ⛔ :</u> GitHub ne contient aucune forme de publicité externe.</h3>
      <h3><u>• Authentification à deux facteurs 🔒 :</u> GitHub prend en charge l’authentification à deux facteurs (2FA).</h3>
      <h3><u>• Mode sombre 🌗 :</u> GitHub prend en charge le mode sombre pour une utilisation confortable dans des conditions de faible luminosité.</h3>
  </div>
  </div>
    </>
    )
  }
  
  export default Apps;