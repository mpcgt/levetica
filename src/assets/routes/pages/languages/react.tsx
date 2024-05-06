import '../pages.css'
import chrome from '../images/chrome.png'
import idx from '../images/idx.png'

function React() {
    return (
      <>
      <div>
      <br />
      <br />
      <br />
      <br />
       <div className='center'>
       <h1>Outils pour React<img alt="React" height="65" width="75" src='https://github.com/mpcgt/levetica/blob/main/src/assets/routes/others/languages/images/react.png?raw=true' /></h1> { /* Un logo avec le texte qui fait 65px de hauteur et 75px de largeur */ }
       </div>

       <div className='border'>
      <div className='margin'>
      <div className='float'>
    <img alt="React Dev" height="70" width="80" src='https://github.com/mpcgt/levetica/blob/main/src/assets/routes/others/languages/images/react.png?raw=true' /><h2><a href='https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil' target='_blank'>React Developer Tools</a></h2> { /* Un logo avec le texte qui fait 70px de hauteur et 80px de largeur */ }
      </div>
      <h4><i>Extensions de navigateur | Gratuit • Open Source</i></h4>
      <h3>React Developer Tools est une extension de navigateur qui permet d’inspecter et de modifier les hiérarchies de composants React. Elle offre également des outils pour identifier les problèmes de performance et pour éditer les props et l’état des composants.</h3>
  <br />
      <h2><b>Les fonctionnalités de React Developer Tools :</b></h2>
      <h3><u>• Inspection des composants 🔎 :</u> React Developer Tools permet d’inspecter les hiérarchies de composants React, ce qui facilite la compréhension de la structure de l’application.</h3>
      <h3><u>• Modification des props et de l’état ✏️ :</u> Ces outils permettent de modifier les props et l’état des composants, ce qui est utile pour le débogage et le test.</h3>
      <h3><u>• Identification des problèmes de performance 📈 :</u> Il offre des outils pour identifier les problèmes de performance, ce qui peut aider à optimiser le site web.</h3>
      <h3><u>• Facilité d’apprentissage 🥸 :</u> React Developer Tools est simple à apprendre et à comprendre, ce qui le rend accessible même aux développeurs débutants.</h3>
      <h3><u>• Compatibilité avec plusieurs navigateurs 🌍 :</u> L’extension est disponible pour plusieurs navigateurs populaires, ce qui offre une grande flexibilité.</h3>
  </div>
  </div>

  <br />
  <br />

  <div className='border'>
      <div className='margin'>
      <div className='float'>
    <img alt="Chrome" height="70" width="70" src={chrome} /><h2><a href='https://www.google.com/intl/fr_fr/chrome/' target='_blank'>Google Chrome</a></h2> { /* Un logo avec le texte qui fait 70px de hauteur et 70px de largeur */ }
      </div>
      <h4><i>Navigateur web | Gratuit • Propriétaire</i></h4>
      <h3>Google Chrome est un navigateur web gratuit, rapide, sécurisé et personnalisable, disponible sur ordinateurs et appareils mobiles.</h3>
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
      <h4><i>Éditeur de code | Gratuit • Propriétaire</i></h4>
      <h3>Project IDX est un environnement de développement web basé sur le cloud et dopé à l'IA, conçu par Google pour faciliter la création et le déploiement d'applications multiplateformes.</h3>
  <br />
      <h2><b>Les fonctionnalités de Project IDX :</b></h2>
      <h3><u>• Création d'applications multiplateformes 📱 :</u> Vous pouvez créer des applications qui fonctionnent sur le Web, les appareils mobiles et les ordinateurs de bureau avec un seul ensemble de code..</h3>
      <h3><u>• Autocomplétion ✏️ :</u> Project IDX peut prédire et compléter le reste d’un mot ou d’une expression que vous tapez.</h3>
      <h3><u>• Déploiement simplifié ☁️ :</u> Project IDX facilite le déploiement de vos applications sur Google Cloud Platform ou sur tout autre fournisseur de cloud.</h3>
      <h3><u>• Collaboration améliorée 🤝 :</u> Project IDX permet aux équipes de développer des applications ensemble en temps réel.</h3>
      <h3><u>• Intelligence artificielle intégrée 🤖 :</u> Project IDX utilise l'IA pour vous aider à prendre de meilleures décisions en matière de conception et de développement.</h3>
  </div>
  </div>
       </div>
    </>
    )
  }
  
  export default React;