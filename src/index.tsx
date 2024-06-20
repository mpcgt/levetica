import Hero from '../src/assets/components/hero/hero'
import dev from "../src/assets/images/dev.png";
import transition from "../src/assets/routes/pages/transition"
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import "./index.css";

// eslint-disable-next-line react-refresh/only-export-components
function Text() {
  return (
    <>
        <Hero />

        <br />
        <br />
        <div className="margin">
          {" "}
          {/* Décale le texte en 15px */}
          <h2>Bonjour ! 👋🏼</h2>
          <h4>
            <b>
              <u>Quel est le but de ce projet ?</u>
            </b>
          </h4>
          <p>
            Aider les développeurs, débutants ou expérimentés, à trouver les
            outils et les langages de programmation les plus adaptés à leurs
            besoins.
          </p>
          <br />
          <div className="center">
            {" "}
            {/* Centrer le texte */}
            <img alt="Dev" height="250" width="500" src={dev} />{" "}
            {/* Une image qui fait 250px de hauteur et 500px de largeur */}
          </div>
          <br />
          <h4>
            <b>
              <u>Comment ça fonctionne ?</u>
            </b>
          </h4>
          <p>
            1.{" "}
            <b>
              Pour chaque outil et langage, le site fournit une description
              détaillée
            </b>
            , des exemples d'utilisation, des tutoriels et des liens vers la
            communauté.
          </p>
          <p>
            2.{" "}
            <b>
              Le développeur peut également consulter des articles et des guides
            </b>{" "}
            pour l'aider à choisir les meilleurs outils pour son projet.
          </p>
          <h4>
            <b>
              <u>Quels avantages ?</u>
            </b>
          </h4>
          <p>
            1. <b>Gain de temps et d'énergie :</b> le développeur n'a pas à
            passer des heures à rechercher les outils et les langages qui lui
            conviennent.
          </p>
          <p>
            2. <b>Choix éclairé :</b> le développeur a accès à toutes les
            informations dont il a besoin pour prendre une décision réfléchie.
          </p>
          <p>
            3. <b>Développement plus efficace :</b> le développeur utilise les
            outils et les langages les plus adaptés à ses besoins, ce qui lui
            permet de travailler plus rapidement et de manière plus productive.
          </p>
          <h4>
            <b>
              <u>Quels public ciblés ?</u>
            </b>
          </h4>
          <p>
            1. <b>Développeurs débutants</b> qui ne savent pas quels outils et
            langages choisir.
          </p>
          <p>
            2. <b>Développeurs expérimentés</b> qui recherchent de nouveaux
            outils pour améliorer leur productivité.
          </p>
          <p>
            3. <b>Étudiants en informatique</b> qui veulent découvrir les
            différents langages de programmation.
          </p>
          <br />A bientôt et merci à ceux qui me soutiennent en laissant une ⭐
          dans mon projet sur <a href="https://levetica.vercel.app">GitHub</a>{" "}
          😊
          <br />
          <br />
      </div>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default transition(Text);
