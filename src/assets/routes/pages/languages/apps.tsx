import '../pages.css'
import chrome from '../images/chrome.png'
import idx from '../images/idx.png'
import vscode from '../images/vscode.png'
import github from '../images/github.png'
import win from '../images/win11.png'

function Apps() {
    return (
      <>
      <br />
      <br />
      <br />
      <br />
       <div className='center'> { /* Centrer le texte */ }
       <div className='ahsing'><h1>Logiciels pour Windows <img alt="Windows" height="65" width="65" src={win} /></h1></div> { /* Une image qui fait 65px de hauteur et 65px de largeur */ }
       <h2><b>Boostez votre créativité et votre efficacité avec cette sélection d'applications essentielles pour les développeurs sur Windows.</b></h2>
       <hr />
       </div>
  <div className='border'>
      <div className='margin'>
      <div className='float'>
    <img alt="Chrome" height="70" width="70" src={chrome} /><h2><a href='https://www.google.com/intl/fr_fr/chrome/' target='_blank'>Google Chrome</a></h2> { /* Un logo avec le texte qui fait 70px de hauteur et 70px de largeur */ }
      </div>
      <h4><i>Navigateur web</i><i><div className='green'>Gratuit • Propriétaire</div></i></h4>
      <div className='center'><h3>Google Chrome est un navigateur web gratuit, rapide, sécurisé et personnalisable, disponible sur ordinateurs et appareils mobiles.</h3></div>
  <br />
      <h2><b>Les fonctionnalités de Google Chrome :</b></h2>
      <h3><u>• Traduction des sites web 📝 :</u> Google Chrome utilise un traducteur intégré pour traduire le contenu dans n’importe quelle langue en temps réel.</h3>
      <h3><u>• Mode sombre 🌗 :</u> Google Chrome prend en charge le mode sombre pour une utilisation confortable dans des conditions de faible luminosité.</h3>
      <h3><u>• Prise en charge de Chromecast 📺 :</u> Diffusez votre contenu sur un appareil connecté à Chromecast avec Google Chrome.</h3>
      <h3><u>• Synchronisation dans le cloud ☁️ :</u> Synchronisez vos données (notes, documents, favoris, etc.) sur vos différents appareils et vers le cloud.</h3>
      <h3><u>• Extensible par plugins/extensions 🛠️ :</u> Google Chrome peut être étendu avec des modules complémentaires, des plugins et des extensions.</h3>
  </div>
  </div>

  <br />
  <br />

  <div className='border'>
      <div className='margin'>
      <div className='float'>
    <img alt="IDX" height="70" width="70" src={idx} /><h2><a href='https://idx.dev/' target='_blank'>Project IDX</a></h2> { /* Un logo avec le texte qui fait 70px de hauteur et 70px de largeur */ }
      </div>
      <h4><i>Éditeur de code</i><i><div className='green'>Gratuit • Propriétaire</div></i></h4>
      <div className='center'><h3>Project IDX est un environnement de développement web basé sur le cloud et dopé à l'IA, conçu par Google pour faciliter la création et le déploiement d'applications multiplateformes.</h3></div>
  <br />
      <h2><b>Les fonctionnalités de Project IDX :</b></h2>
      <h3><u>• Création d'applications multiplateformes 📱 :</u> Vous pouvez créer des applications qui fonctionnent sur le Web, les appareils mobiles et les ordinateurs de bureau avec un seul ensemble de code..</h3>
      <h3><u>• Autocomplétion ✏️ :</u> Project IDX peut prédire et compléter le reste d’un mot ou d’une expression que vous tapez.</h3>
      <h3><u>• Déploiement simplifié ☁️ :</u> Project IDX facilite le déploiement de vos applications sur Google Cloud Platform ou sur tout autre fournisseur de cloud.</h3>
      <h3><u>• Collaboration améliorée 🤝 :</u> Project IDX permet aux équipes de développer des applications ensemble en temps réel.</h3>
      <h3><u>• Intelligence artificielle intégrée 🤖 :</u> Project IDX utilise l'IA pour vous aider à prendre de meilleures décisions en matière de conception et de développement.</h3>
  </div>
  </div>

  <br />
  <br />

  <div className='border'>
      <div className='margin'>
      <div className='float'>
    <img alt="VSCode" height="70" width="70" src={vscode} /><h2><a href='https://code.visualstudio.com/' target='_blank'>Visual Studio Code</a></h2> { /* Un logo avec le texte qui fait 70px de hauteur et 70px de largeur */ }
      </div>
      <h4><i>Éditeur de code</i><i><div className='green'>Gratuit • Open Source</div></i></h4>
      <div className='center'><h3>Visual Studio Code (VS Code) est un éditeur de code pour le développement d’applications web et cloud. Il offre des fonctionnalités telles que IntelliSense pour des suggestions intelligentes, la possibilité de déboguer depuis l’éditeur, et une intégration avec Git.</h3></div>
  <br />
      <h2><b>Les fonctionnalités de Visual Studio Code :</b></h2>
      <h3><u>• Prise en charge des thèmes 🎨 :</u> Vous pouvez utiliser des thèmes et des modèles pour modifier l’apparence de Visual Studio Code.</h3>
      <h3><u>• Autocomplétion ✏️ :</u> Visual Studio Code peut prédire et compléter le reste d’un mot ou d’une expression que vous tapez.</h3>
      <h3><u>• Prise en charge de Git 🛠️ :</u> Visual Studio Code prend en charge Git, un système de contrôle de version distribué gratuit et open source.  </h3>
      <h3><u>• Fonctionne hors ligne ✈️ :</u> Visual Studio Code peut être utilisé sans qu’il soit nécessaire de se connecter à Internet.</h3>
      <h3><u>• Extensible par plugins/extensions 🛠️ :</u> Visual Studio Code peut être étendu avec des modules complémentaires, des plug-ins et des extensions.</h3>
  </div>
  </div>

  <br />
  <br />

  <div className='border'>
      <div className='margin'>
      <div className='float'>
    <img alt="GitHub" height="70" width="70" src={github} /><h2><a href='https://github.com/' target='_blank'>GitHub</a></h2> { /* Un logo avec le texte qui fait 70px de hauteur et 70px de largeur */ }
      </div>
      <h4><i>Système de contrôle de version</i><i><div className='green'>Freemium • Propriétaire</div></i></h4>
      <div className='center'><h3>GitHub est une plateforme de développement collaboratif qui permet aux développeurs de stocker et de gérer leur code en ligne, tout en facilitant le suivi des modifications. C’est aussi un réseau social où les développeurs peuvent collaborer sur des projets, partager des idées et apprendre les uns des autres.</h3></div>
  <br />
      <h2><b>Les fonctionnalités de GitHub :</b></h2>
      <h3><u>• Gestion des versions de fichiers 📂 :</u> GitHub dispose d’un système de version qui vous permet d’afficher et de revenir à des versions antérieures du projet/fichier/document.</h3>
      <h3><u>• Prise en charge de Git 🛠️ :</u> GitHub prend en charge Git, un système de contrôle de version distribué gratuit et open source.</h3>
      <h3><u>• Sans publicité ⛔ :</u> GitHub ne contient aucune forme de publicité externe.</h3>
      <h3><u>• Authentification à deux facteurs 🔒 :</u> GitHub prend en charge l’authentification à deux facteurs (2FA).</h3>
      <h3><u>• Mode sombre 🌗 :</u> GitHub prend en charge le mode sombre pour une utilisation confortable dans des conditions de faible luminosité.</h3>
  </div>
  </div>

  <br />
  <br />



    </>
    )
  }
  
  export default Apps;