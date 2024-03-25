import '../pages.css'
import angular_png from '../others/languages/images/angular.png'

function Angular() {
    return (
      <>
      <div>
       <div className='center'>
       <h1>Outils pour Angular<img alt="Angular" height="65" width="65" src='https://github.com/mpcgt/levetica/blob/main/src/assets/routes/others/languages/images/angular.png?raw=true' /></h1>
    </div>

    <div className='border'>
      <div className='margin'>
      <div className='float'>
    <img alt="Angular IDE" height="70" width="70" src={angular_png} /><h2><a href='https://angular.dev' target='_blank'>Angular IDE</a></h2>
      </div>
      <h4><i>Environnement de développement | Gratuit • Open Source</i></h4>
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
    </div>
    </>
    )
  }
  
  export default Angular;