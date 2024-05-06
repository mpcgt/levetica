import '../pages/pages.css'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import opensource_png from '../others/languages/images/opensource.png'
import react_png from '../others/languages/images/react.png'
import angular_png from '../others/languages/images/angular.png'
import vue_png from '../others/languages/images/vue.png'
import html_png from '../others/languages/images/html.png'
import css_png from '../others/languages/images/css.png'
import js_png from '../others/languages/images/js.png'
import ts_png from '../others/languages/images/ts.png'
import tuto_png from '../others/languages/images/tuto.png'

function Tools() {
  const navigate = useNavigate();
  return (
    <>
    <div>
      <br />
      <br />
      <br />
      <br />
     <div className='center'>
     <div className='ahsing'><h1>Guide d'outils pour les développeurs</h1></div>
     </div>
      <br />
      <div className='margin'>
      <h3>Les outils adaptés par langages de programmation sont des ressources essentielles pour les développeurs, leur permettant de travailler de manière efficace et efficiente dans un environnement de développement spécifique à chaque langage. Ces outils sont conçus pour répondre aux besoins particuliers des développeurs travaillant dans un langage spécifique, en offrant des fonctionnalités telles que la syntaxe de coloration, la complétion automatique de code, la vérification de la syntaxe, le débogage et le profilage. Ces outils permettent aux développeurs de gagner du temps, de réduire les erreurs et d'améliorer leur productivité en fournissant un environnement de développement spécialement adapté aux particularités et aux exigences de chaque langage de programmation.</h3>
    </div>
    <br />
    <div className='center'>
      <button className="btn elevated rounded" onClick={() => navigate("/apps")}><img alt="Open-Source" height="25" width="25" src={opensource_png} />Applications</button>&nbsp;&nbsp;
      <button className="btn elevated rounded" onClick={() => navigate("/react")}><img alt="React" height="25" width="30" src={react_png} />React</button>&nbsp;&nbsp;
      <button className="btn elevated rounded" onClick={() => navigate("/angular")}><img alt="Angular" height="25" width="25" src={angular_png} />Angular</button>&nbsp;&nbsp;
      <button className="btn elevated rounded" onClick={() => navigate("/vue")}><img alt="Vue" height="25" width="30" src={vue_png} />Vue</button>&nbsp;&nbsp;
      <button className="btn elevated rounded" onClick={() => navigate("/html")}><img alt="HTML" height="25" width="30" src={html_png} />HTML</button>&nbsp;&nbsp;
      <button className="btn elevated rounded" onClick={() => navigate("/css")}><img alt="CSS" height="25" width="20" src={css_png} />CSS</button>&nbsp;&nbsp;
      <button className="btn elevated rounded" onClick={() => navigate("/js")}><img alt="JavaScript" height="25" width="29" src={js_png} />JavaScript</button>&nbsp;&nbsp;
      <button className="btn elevated rounded" onClick={() => navigate("/ts")}><img alt="TypeScript" height="25" width="30" src={ts_png} />TypeScript</button>&nbsp;&nbsp;
      <button className="btn elevated rounded" onClick={() => navigate("/reactn")}><img alt="React" height="25" width="30" src={react_png} />React Native</button>&nbsp;&nbsp;
      <Button variant="dark" onClick={() => navigate("/reactn")}>Test</Button>
      <br />
      <br />
      <button className="btn elevated rounded" onClick={() => navigate("/tuto")}><img alt="Tutoriels" height="25" width="30" src={tuto_png} />Apprendre</button>&nbsp;&nbsp;

    <h4>Les noms des applications sont des liens cliquables qui vous redirigent vers le site officiel de l'application.</h4>
    </div>
  </div>
  </>
  )
}

export default Tools;