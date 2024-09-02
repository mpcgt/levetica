import '../pages.css'
import chrome from '../images/chrome.png'
import idx from '../images/idx.png'


function Angular() {
    return (
      <>
      <div>
      <br />
      <br />
      <br />
      <br />
       <div className='center'>
       <h1>Outils pour Angular</h1>
    </div>
    <div className='border'>
      <div className='margin'>
      <div className='float'>
    <img alt="Angular IDE" height="70" width="70" src='https://github.com/mpcgt/levetica/blob/main/src/assets/routes/others/languages/images/angular.png?raw=true' /><h2><a href='https://angular.dev' target='_blank'>Angular IDE</a></h2> { /* Un logo avec le texte qui fait 70px de hauteur et 70px de largeur */ }
      </div>
      <h4>Environnement de développement | <i className='text-warning'>Gratuit • Open Source</i></h4>
      <h3>Angular IDE est un environnement de développement intégré (IDE) spécialement conçu pour le framework Angular. Il est disponible sous forme de plugin autonome, il facilite le développement en offrant des fonctionnalités spécifiques au framework</h3>
  <br />
      <h2><b>Les fonctionnalités de Angular IDE :</b></h2>
      <h3><u>• Validation et débogage TypeScript ✅ :</u> Angular IDE offre une validation et un débogage avancés pour TypeScript.</h3>
      <h3><u>• Intégration CLI 🛠️ :</u> Il est intégré avec la ligne de commande, ce qui facilite le développement.</h3>
      <h3><u>• Modèles HTML avancés ✏️ :</u> Angular IDE fournit des modèles HTML avancés, ce qui accélère le processus de développement.</h3>
      <h3><u>• Prise en charge d’Angular et TypeScript 💻 :</u> Il prend en charge les dernières versions d’Angular et TypeScript, ce qui garantit la compatibilité avec les dernières fonctionnalités.</h3>
      <h3><u>• Autocomplétion du code 📝 :</u> Angular IDE offre une autocomplétion du code, ce qui permet d’écrire du code plus rapidement et avec moins d’erreurs.</h3>
  </div>
  </div>

  <br />
  <br />
  <div className='border'>
      <div className='margin'>
      <div className='float'>
    <img alt="Chrome" height="70" width="70" src={chrome} /><h2><a href='https://www.google.com/intl/fr_fr/chrome/' target='_blank'>Google Chrome</a></h2> { /* Un logo avec le texte qui fait 70px de hauteur et 70px de largeur */ }
      </div>
      <h4>Navigateur web | <i className='text-warning'>Gratuit • Propriétaire</i></h4>
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
      <h4>Éditeur de code | <i className='text-warning'>Gratuit • Propriétaire</i></h4>
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
  
  export default Angular;