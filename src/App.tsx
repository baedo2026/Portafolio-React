
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

function App() {
  return (
    <>
      <a className="app__skip-link" href="#main-content">
        Saltar al contenido
      </a>

      <Navbar />

      <div id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-mi" element={<AboutPage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <footer className="app__footer">
        <p>Benjamín Aedo · Ingeniería Civil en Informática · UCT</p>
        <a href="/">Volver al inicio</a>
      </footer>
    </>
  );
}

export default App;
