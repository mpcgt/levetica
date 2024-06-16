import Hero from '../src/assets/components/hero/hero'
import imagePathWhite from "../src/assets/lvtcw-letters.png";
import dev from "../src/assets/images/dev.png";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import "./index.css";

function Text() {
  return (
    <>
      <div>
        <Hero />
        <div className="text-center">
        <div className="marginstart">
          <a href="https://github.com/mpcgt/levetica" rel="noopener" target="_blank">
            {" "}
            {/* Lien cliquable sur l'image/logo */}
            <img src={imagePathWhite} className="logo" alt="Levetica" />{" "}
            {/* Un logo qui fait 250px de hauteur et 450px de largeur */}
          </a>
          <br />
          <h1 className="ahsing">
            Fini les hésitations, trouve les outils adaptés à tes besoins. 👨‍💻⚛️
          </h1>{" "}
          {/* Titre */}
        </div>
        </div>
      </div>

      <div className="center">
        {" "}
        {/* Centrer le texte */}
          {" "}
          {/* Crée un bloc en arrondi et en gris */}
          <div className="alert alert-danger mx-5" role="alert">
          ⚠️<u>Annonces de Levetica : (14/06/2024)</u>
            <br />
            <br />
            Ce site web est actuellement en construction, ce site sera
            officiellement publiée le <b>1er juillet 2024 à 18h.</b> <i>Vous êtes actuellement dans la version 1.2.0 (5 mai 2024)</i>
            <br />
            <br />
            Vous avez atteint le site web de <b>Levetica</b>, un site web de nos
            recommandations des logiciels, des outils et des sites web qui sont
            utiles selon vos besoins des développeurs.
            <br />
            <br />
            N'hésitez pas à consulter le{" "}
            <a href="https://levetica.vercel.app" className="alert-link">code source</a> du site et
            merci à ceux qui me soutiennent en laissant une ⭐ dans mon projet.
            Jetez aussi un coup d'oeil dans ce site si vous voulez en savoir
            plus dans Levetica. 😊
            <br />
            <br />
            <i>Max - Développeur web et créateur de Levetica</i>
          </div>
          </div>
      <div>
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
      </div>
    </>
  );
}

export default Text;
