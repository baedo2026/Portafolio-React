import { Link } from "react-router-dom";
import { profileData } from "../data/portfolioData";
import "./HomePage.css";

function HomePage() {
  return (
    <main className="home-page">
      <section className="home-page__hero">
        <div className="home-page__content">
          <p className="home-page__eyebrow">{profileData.career} · UCT</p>
          <h1 className="home-page__title">{profileData.name}</h1>
          <p className="home-page__level">{profileData.academicLevel}</p>
          <p className="home-page__description">{profileData.description}</p>
          <p className="home-page__introduction">{profileData.introduction}</p>
          <div className="home-page__actions">
            <Link className="home-page__button" to="/proyectos">Ver proyectos</Link>
            <Link className="home-page__button home-page__button--secondary" to="/contacto">Contactarme</Link>
          </div>
        </div>
        <div className="home-page__image-container">
          <img className="home-page__image" src={profileData.image} alt={profileData.imageAlt} />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
