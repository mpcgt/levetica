import '../pages.css'
import react_dev from '../images/react-dev.png'

function React() {
    return (
      <>
      <div>
       <div className='center'>
       <h1>Outils pour React<img alt="React" height="65" width="65" src='https://github.com/mpcgt/levetica/blob/main/src/assets/routes/others/languages/images/react.png?raw=true' /></h1>
       </div>

       <div className='border'>
      <div className='margin'>
      <div className='float'>
    <img alt="React Dev" height="70" width="70" src={react_dev} /><h2><a href='https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil' target='_blank'>React Developer Tools</a></h2>
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
       </div>
    </>
    )
  }
  
  export default React;