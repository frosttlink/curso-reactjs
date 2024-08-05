import './index.scss'

import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="pagina-app pagina">
      <h1 className='titulo'> Estudos de ReactJS</h1>


      <Link to='/contato'>
        Ir para Contato
      </Link>

      <Link to='/eventos'>
        Eventos
      </Link>

    </div>
  );
}
