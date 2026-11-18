import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <main className="not-found">
      <h1 className="not-found__code">404</h1>
      <h2 className="not-found__title">Página no encontrada</h2>
      <p className="not-found__description">La página que buscas no existe o fue movida.</p>
      <Link className="not-found__link" to="/">Volver al inicio</Link>
    </main>
  );
}

export default NotFoundPage;
