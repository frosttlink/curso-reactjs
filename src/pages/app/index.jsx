import "./index.scss";

import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="pagina-app pagina">
      <header>Estudos de ReactJS</header>

      <div className="secao">
        <Link to="/contato">Ir para Contato</Link>
        <Link to="/eventos">Eventos</Link>
      </div>
    </div>
  );
}
