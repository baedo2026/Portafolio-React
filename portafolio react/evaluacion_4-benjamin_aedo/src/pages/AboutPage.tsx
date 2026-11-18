import { profileData, skillsData } from "../data/portfolioData";
import "./AboutPage.css";

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-page__section">
        <div className="about-page__heading">
          <p className="about-page__eyebrow">Conóceme</p>
          <h1 className="about-page__title">Sobre mí</h1>
        </div>
        <div className="about-page__content">
          <div className="about-page__profile">
            <h2>{profileData.name}</h2>
            <p>{profileData.career}</p>
            <p>{profileData.university}</p>
            <p>{profileData.academicLevel}</p>
            <p>{profileData.description}</p>
            <p>{profileData.introduction}</p>
          </div>
          <div className="about-page__skills">
            <h2>Competencias</h2>
            <ul>
              {skillsData.map((skill) => <li key={skill.id}>{skill.name}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
