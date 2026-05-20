import { useState } from "react";
import "./App.css";
import demoVideoRecipes from "./assets/video-recipes.mp4";
import demoVideoBienEtre from "./assets/video-bien-etre.mp4";
import demoVideoEcfBackend from "./assets/video-ecf-backend.mp4";
import demoVideoStage from "./assets/video-stage.mp4";

function App() {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleDemoClick = (e, video) => {
    e.preventDefault();
    setActiveVideo(activeVideo === video ? null : video);
  };

  return (
    <div className="page">
      <div className="cv">
        <header className="header">
          <div>
            <h1>Odile Richard</h1>
            <p className="target">
              Recherche une alternance pour 2026 – Technicienne Supérieure Systèmes et Réseaux
            </p>
          </div>

          <div className="contact">
            <p>Ermont – France</p>
            <p>06 70 48 69 15</p>
            <p>leblogdeveloppeurs@gmail.com</p>
            <p>
              <a
                href="https://github.com/VICTOIRE22victoire22"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </p>
            <p>
              <a
                href="https://portefolio-odile.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Portfolio
              </a>
            </p>
          </div>
        </header>

        <section className="section">
          <h3>Profil</h3>
          <p>
              Professionnelle en reconversion vers l’informatique, je souhaite évoluer dans les métiers des systèmes et réseaux. 
              Rigoureuse, curieuse et motivée, je souhaite développer mes compétences dans ce domaine à travers une alternance 
              et une formation Technicienne Supérieure Systèmes et Réseaux. Mon parcours dans l'informatique et mon expérience
              professionnelle m'ont permis de développer ma capacité d'adaptation, mon sens de l'organisation et ma rigueur.
          </p>
        </section>

        <section className="section">
          <h3>Compétences</h3>
          <div className="skills">
            <p>
              <strong>Systèmes et réseaux :</strong> notions générales en informatique et intérêt pour l'administration systèmes 
              et réseaux.
            </p>
            <p>
              <strong>Frontend :</strong> HTML5, CSS3, JavaScript, React.js,
              Responsive Design
            </p>
            <p>
              <strong>Backend :</strong> Node.js, Express.js, PHP, Symfony, API
              REST
            </p>
            <p>
              <strong>Bases de données :</strong> MongoDB, MySQL, SQL
            </p>
            <p>
              <strong>Modélisation :</strong> Merise, UML
            </p>
            <p>
              <strong>Outils :</strong> Git, GitHub, Netlify, Northflank,
              Cloudinary, Stripe, n8n
            </p>
          </div>
        </section>

        <section className="section">
          <h3>Projets</h3>

          <div className="project">
            <div className="project-head">
              <h4>Application de gestion de recettes</h4>
              <span>React • Node.js • Express • MongoDB</span>
            </div>
            <p>
              Application fullstack permettant de créer, modifier, supprimer et
              consulter des recettes avec filtrage par catégorie et type de
              cuisine.
            </p>
            <p className="links">
              <a
                href="https://github.com/VICTOIRE22victoire22/recipes.git"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              {" • "}
              <a href="/" onClick={(e) => handleDemoClick(e, "recipes")}>
                Démo
              </a>
            </p>

            {activeVideo === "recipes" && (
              <div className="video-container">
                <video controls width="700">
                  <source src={demoVideoRecipes} type="video/mp4" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              </div>
            )}
          </div>

          <div className="project">
            <div className="project-head">
              <h4>Gestionnaire de parc téléphonique</h4>
              <span>PHP • MySQL • HTML • CSS • JavaScript</span>
            </div>
            <p>
              Application web permettant de gérer les équipements et lignes
              téléphoniques d’une organisation : sites, bâtiments, équipements
              et utilisateurs.
            </p>
            <p className="links">
              <a
                href="https://github.com/VICTOIRE22victoire22/projet_stage_dwwm.git"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              {" • "}
              <a href="/" onClick={(e) => handleDemoClick(e, "stage")}>
                Démo
              </a>
            </p>

            {activeVideo === "stage" && (
              <div className="video-container">
                <video controls width="700">
                  <source src={demoVideoStage} type="video/mp4" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              </div>
            )}
          </div>

          <div className="project">
            <div className="project-head">
              <h4>Application de gestion de salles</h4>
              <span>PHP • Symfony • Twig • MySQL</span>
            </div>
            <p>
              Application web développée avec Symfony permettant de rechercher,
              consulter et ajouter des salles via une interface connectée à une
              base de données.
            </p>
            <p className="links">
              <a
                href="https://github.com/VICTOIRE22victoire22/ecf_backend.git"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              {" • "}
              <a href="/" onClick={(e) => handleDemoClick(e, "ecf")}>
                Démo
              </a>
            </p>

            {activeVideo === "ecf" && (
              <div className="video-container">
                <video controls width="700">
                  <source src={demoVideoEcfBackend} type="video/mp4" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              </div>
            )}
          </div>

          <div className="project">
            <div className="project-head">
              <h4>Site bien-être avec prise de rendez-vous</h4>
              <span>HTML • CSS • JavaScript</span>
            </div>
            <p>
              Site web présentant des prestations de bien-être avec un agenda
              interactif de réservation et un formulaire de contact responsive.
            </p>
            <p className="links">
              <a
                href="https://github.com/VICTOIRE22victoire22/dynamique.git"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              {" • "}
              <a href="/" onClick={(e) => handleDemoClick(e, "bienetre")}>
                Démo
              </a>
            </p>

            {activeVideo === "bienetre" && (
              <div className="video-container">
                <video controls width="700">
                  <source src={demoVideoBienEtre} type="video/mp4" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              </div>
            )}
          </div>
        </section>

        <div className="two-columns">
          <section className="section">
            <h3>Formation</h3>

            <div className="entry">
              <div className="entry-top">
                <h4>Le Reacteur</h4>
                <span>2026</span>
              </div>
              <p>
                Formation en conception et développement d'applications
              </p>
              <p className="muted">
                JavaScript, Node.js, React, Express, MongoDB, API REST,
                déploiement d’applications
              </p>
            </div>

            <div className="entry">
              <div className="entry-top">
                <h4>Prepavenir Formation</h4>
                <span>2025</span>
              </div>
              <p>
                Formation en développement web et web mobile
              </p>
              <p className="muted">
                HTML, CSS, JavaScript, PHP, Symfony, React, MySQL, UX Design
              </p>
            </div>
          </section>

          <section className="section">
            <h3>Expériences</h3>

            <ul className="experience-list">
              <li>
                <strong>2016 - Aujourd’hui</strong> — Approvisionneuse — Safran
                Aircraft Engines
              </li>
              <li>
                <strong>2013 - 2015</strong> — Opératrice en préparation brasage
                — Safran Aircraft Engines
              </li>
              <li>
                <strong>2009 - 2012</strong> — Employée administrative et
                comptable
              </li>
              <li>
                <strong>1998 - 2009</strong> — Brocheuse papetière
              </li>
            </ul>

            <div className="languages">
              <h3>Langues</h3>
              <p>Français, anglais intermédiaire</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
