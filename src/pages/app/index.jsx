import './index.css'

import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <h1> Estudos de ReactJS</h1>

      <Link to='/contato'>
        Ir para Contato
      </Link>
    </div>
  );
}
