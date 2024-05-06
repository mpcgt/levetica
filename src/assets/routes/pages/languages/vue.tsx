import '../pages.css'
import chrome from '../images/chrome.png'
import idx from '../images/idx.png'

function Vue() {
    return (
      <>
      <div>
      <br />
      <br />
      <br />
      <br />
       <div className='center'>
       <h1>Outils pour Vue</h1>
    </div>
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
  
  export default Vue;