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
       <h1>Outils pour React</h1>
       </div>

       <div className='border'>
      <div className='margin'>
      <div className='float'>
    <img alt="React Dev" height="70" width="80" src='https://github.com/mpcgt/levetica/blob/main/src/assets/routes/others/languages/images/react.png?raw=true' /><h2><a href='https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil' className='fs-4' target='_blank'>React Developer Tools</a></h2> { /* Un logo avec le texte qui fait 70px de hauteur et 80px de largeur */ }
      </div>
      <h4>Extensions de navigateur | <i className='text-warning'>Gratuit • Open Source</i></h4>
      <h3>React Developer Tools est une extension de navigateur qui permet d’inspecter et de modifier les hiérarchies de composants React. Elle offre également des outils pour identifier les problèmes de performance et pour éditer les props et l’état des composants.</h3>
  <br /><br />
  <div className='fs-6'>
      <h2><b>Les fonctionnalités de React Developer Tools :</b></h2>
      <h3 className='mt-3'><span className="text-decoration-underline fw-bold">• Inspection des composants 🔎 :</span> React Developer Tools permet d’inspecter les hiérarchies de composants React, ce qui facilite la compréhension de la structure de l’application.</h3>
      <h3 className='mt-3'><span className="text-decoration-underline fw-bold">• Modification des props et de l’état ✏️ :</span> Ces outils permettent de modifier les props et l’état des composants, ce qui est utile pour le débogage et le test.</h3>
      <h3 className='mt-3'><span className="text-decoration-underline fw-bold">• Identification des problèmes de performance 📈 :</span> Il offre des outils pour identifier les problèmes de performance, ce qui peut aider à optimiser le site web.</h3>
      <h3 className='mt-3'><span className="text-decoration-underline fw-bold">• Facilité d’apprentissage 🥸 :</span> React Developer Tools est simple à apprendre et à comprendre, ce qui le rend accessible même aux développeurs débutants.</h3>
      <h3 className='mt-3'><span className="text-decoration-underline fw-bold">• Compatibilité avec plusieurs navigateurs 🌍 :</span> L’extension est disponible pour plusieurs navigateurs populaires, ce qui offre une grande flexibilité.</h3>
  </div>
  </div>
  </div>

  <br />
  <br />



  <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <li className="me-2">
            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" className="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500">About</button>
        </li>
        <li className="me-2">
            <button id="services-tab" data-tabs-target="#services" type="button" role="tab" aria-controls="services" aria-selected="false" className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Services</button>
        </li>
        <li className="me-2">
            <button id="statistics-tab" data-tabs-target="#statistics" type="button" role="tab" aria-controls="statistics" aria-selected="false" className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Facts</button>
        </li>
    </ul>
    <div id="defaultTabContent">
        <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Powering innovation & trust at 200,000+ companies worldwide</h2>
            <p className="mb-3 text-gray-500 dark:text-gray-400">Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.</p>
            <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                Learn more
                <svg className=" w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
            </a>
        </div>
        <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="services" role="tabpanel" aria-labelledby="services-tab">
            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in the world’s potential</h2>
            
            <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span className="leading-tight">Dynamic reports and dashboards</span>
                </li>
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span className="leading-tight">Templates for everyone</span>
                </li>
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span className="leading-tight">Development workflow</span>
                </li>
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span className="leading-tight">Limitless business automation</span>
                </li>
            </ul>
        </div>
        <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="statistics" role="tabpanel" aria-labelledby="statistics-tab">
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div className="flex flex-col">
                    <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
                </div>
                <div className="flex flex-col">
                    <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Public repositories</dd>
                </div>
                <div className="flex flex-col">
                    <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Open source projects</dd>
                </div>
            </dl>
        </div>
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
  
  export default React;