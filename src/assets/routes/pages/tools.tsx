import '../pages/pages.css'
import { useNavigate } from 'react-router-dom';

import opensource from '../others/languages/images/opensource.png'
import react from '../others/languages/images/react.png'
import angular from '../others/languages/images/angular.png'
import vue from '../others/languages/images/vue.png'
import html from '../others/languages/images/html.png'
import css from '../others/languages/images/css.png'
import js from '../others/languages/images/js.png'
import ts from '../others/languages/images/ts.png'

function Tools() {
  const navigate = useNavigate();
  return (
    <>
    <div>
     <div className='center'>
      <h1>Guide d'outils pour les développeurs</h1>
     </div>
      <br />
      <div className='margin'>
      <h4>Les outils adaptés par langages de programmation sont des ressources essentielles pour les développeurs, leur permettant de travailler de manière efficace et efficiente dans un environnement de développement spécifique à chaque langage. Ces outils sont conçus pour répondre aux besoins particuliers des développeurs travaillant dans un langage spécifique, en offrant des fonctionnalités telles que la syntaxe de coloration, la complétion automatique de code, la vérification de la syntaxe, le débogage et le profilage. Ces outils permettent aux développeurs de gagner du temps, de réduire les erreurs et d'améliorer leur productivité en fournissant un environnement de développement spécialement adapté aux particularités et aux exigences de chaque langage de programmation.</h4>
    </div>
    <br />
    <div className='center'>
      <button onClick={() => navigate("/apps")}><img alt="Open-Source" height="25" width="25" src={opensource} />Applications</button>
      <button onClick={() => navigate("/react")}><img alt="React" height="25" width="30" src={react} />React</button>
      <button onClick={() => navigate("/angular")}><img alt="Angular" height="25" width="25" src={angular} />Angular</button>
      <button onClick={() => navigate("/vue")}><img alt="Vue" height="25" width="30" src={vue} />Vue</button>
      <button onClick={() => navigate("/html")}><img alt="HTML" height="25" width="30" src={html} />HTML</button>
      <button onClick={() => navigate("/css")}><img alt="CSS" height="25" width="25" src={css} />CSS</button>
      <button onClick={() => navigate("/js")}><img alt="JavaScript" height="25" width="29" src={js} />JavaScript</button>
      <button onClick={() => navigate("/ts")}><img alt="TypeScript" height="25" width="30" src={ts} />TypeScript</button>
      <button onClick={() => navigate("/reactn")}><img alt="React" height="25" width="30" src={react} />React Native</button>
    </div>
  </div>
  </>
  )
}

export default Tools;