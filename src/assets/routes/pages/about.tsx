import '../pages/pages.css'

function About() {
  return (
    <>
    <div>
     <div className='center' />
      <h1>Bientôt disponible !</h1>
      <br />
      <h2><b>À propos de Levetica</b></h2>
      <div className='center'>
      <a href="https://levetica.vercel.app" rel="noopener" target="_blank">
          <img src='https://github.com/mpcgt/levetica/blob/main/src/assets/levetica-logo.png?raw=true' height="250" width="450" className="logo" alt="Levetica" />
        </a>
        </div>
      
        <div className='margin'>
          <h2>Le but de ce projet est d'aider les développeurs, débutants ou expérimentés, à trouver les outils et les langages de programmation les plus adaptés à leurs besoins.</h2>
            <br />
            <br />
        <h4><b><u>Comment ça fonctionne ?</u></b></h4>
          <p>1. <b>Pour chaque outil et langage, le site fournit une description détaillée</b>, des exemples d'utilisation, des tutoriels et des liens vers la communauté.</p>
          <p>2. <b>Le développeur peut également consulter des articles et des guides</b> pour l'aider à choisir les meilleurs outils pour son projet.</p>
        <h4><b><u>Quels avantages ?</u></b></h4>
          <p>1. <b>Gain de temps et d'énergie :</b> le développeur n'a pas à passer des heures à rechercher les outils et les langages qui lui conviennent.</p>
          <p>2. <b>Choix éclairé :</b> le développeur a accès à toutes les informations dont il a besoin pour prendre une décision réfléchie.</p>
          <p>3. <b>Développement plus efficace :</b> le développeur utilise les outils et les langages les plus adaptés à ses besoins, ce qui lui permet de travailler plus rapidement et de manière plus productive.</p>
        <h4><b><u>Quels public ciblés ?</u></b></h4>
          <p>1. <b>Développeurs débutants</b> qui ne savent pas quels outils et langages choisir.</p>
         <p>2. <b>Développeurs expérimentés</b> qui recherchent de nouveaux outils pour améliorer leur productivité.</p>
          <p>3. <b>Étudiants en informatique</b> qui veulent découvrir les différents langages de programmation.</p>
            <br />
            <br />
        <h2>Ce projet a le potentiel de révolutionner la façon dont les développeurs travaillent en leur offrant un chemin unique pour trouver tous les outils et les langages dont ils ont besoin.</h2>
        </div>
  </div>
  </>
  )
}

export default About;