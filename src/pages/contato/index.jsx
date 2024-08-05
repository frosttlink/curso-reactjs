import './index.scss'

import { Link } from 'react-router-dom'

export default function Contato() {
  return (
    <div className='pagina-contato pagina'>
      <h1 className='titulo'>Contato</h1>
      <Link to='/'>
        Voltar
      </Link>
    </div>
  )
}