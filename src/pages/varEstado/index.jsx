import "./index.scss";
import { useState } from 'react'

import { tratarNumero } from '../../utils/conversao'
import { caluclarTotalIngresso } from "../../services/ingresso";
import { Edit, Trash2 } from "lucide-react";

export default function VarEstado() {

  const [contador, setContador] = useState(0)
  const [tituloS2, setTituloS2] = useState('Oie')

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [res, setRes] = useState(0)

  const [qtdIng, setQtdIng] = useState(0)
  const [meioIng, setmeioIng] = useState(0)
  const [cupom, setCupom] = useState('')
  const [totalIng, setTotalIng] = useState(0)

  const [novaMeta, setNovaMeta] = useState('')
  const [listaMetas, setListaMetas] = useState([])
  const [editando, setEditando] = useState(-1)

  
  const [plano, setPlano] = useState('')
  const [situacao, setSituacao] = useState('')
  const [cor, setCor] = useState('')
  const [listaPlanos, setListaPlanos] = useState([])

  function aumentar() {
    setContador(contador + 1)
  }

  function diminuir() {
    setContador(contador - 1)
  }

  function alterarTitulo(e) {
    let novo = e.target.value;
    setTituloS2(novo)
  }

  function somar() {
    let soma = tratarNumero(num1) + tratarNumero(num2)
    setRes(soma)
  }

  function calcularIng() {
    let tot = caluclarTotalIngresso(qtdIng, meioIng, cupom)

    setTotalIng(tot)
  }

  function adicionarMeta() {
    if (novaMeta != '') {

      if (editando == -1) {
        setListaMetas([...listaMetas, novaMeta])
        setNovaMeta('')
      } else {
        listaMetas[editando] = novaMeta
        setListaMetas([...listaMetas])
        setNovaMeta('')
        setEditando(-1)
      }

    }
  }

  function teclaApertada(e) {
    if (e.key == 'Enter') {
      adicionarMeta()
    }
  }

  function removerMeta(pos) {
    listaMetas.splice(pos, 1)
    setListaMetas([...listaMetas])
  }

  function alterartMeta(pos) {
    setNovaMeta(listaMetas[pos])
    setEditando(pos)
  }

  function adicionarPlano() {
    let novoPlano = {
      titulo: plano,
      tempo: situacao,
      tema: cor
    }

    setListaPlanos([...listaPlanos, novoPlano])
    setPlano('')
    setSituacao('')
    setCor('')

  }

  return (
    <div className="pagina-varestado pagina">
      <header><h1>ReactJS | Variável de Estado</h1></header>

      <div className="secao planos">
        <h1>Meus Planos atuais</h1>

        <div className="entrada">
          <input type="text" placeholder="Meu plano aqui" value={plano} onChange={e => setPlano(e.target.value)}/>
          <input type="text" placeholder="Situação" value={situacao} onChange={e => setSituacao(e.target.value)}/>
          <input placeholder="Cor do plano" value={cor} onChange={e => setCor(e.target.value)}/>
          <button onClick={adicionarPlano}>Adiconar Plano</button>
        </div>

        <div className="lista">
          {listaPlanos.map((item, pos) =>
            <div className="plano" key={pos}>
              <div className="cor" style={{ backgroundColor: item.tema }}>&nbsp;</div>
              <h1> {item.titulo} </h1>
              <h2> {item.tempo} </h2>
            </div>
          )}

        </div>
      </div>

      <div className="secao metas">
        <h1>Metas para os próximos 5 anos</h1>

        <div>
          <input type="text" placeholder="Digite sua meta aqui" onKeyUp={teclaApertada} value={novaMeta} onChange={e => setNovaMeta(e.target.value)}/>
          <button onClick={adicionarMeta}> Adicionar </button>
        </div>

        <ul>
          {listaMetas.map((item, pos) =>
            <li key={pos}> 
              <Trash2 onClick={() => removerMeta(pos)}/>
              <Edit onClick={() => alterartMeta(pos)}/>
              {item} 
            </li>
          )}
        </ul>

      </div>

      <div className="secao">
        <h1>Venda de Ingressos</h1>
        <div className="entrada">
          <div>
            <label>Quantidade</label>
            <input type="text" value={qtdIng} onChange={e => setQtdIng(e.target.value)}/>
          </div>
          <div>
            <label>Meia entrada</label>
            <input type="checkbox" checked={meioIng} onChange={e => setmeioIng(e.target.checked)}/>
          </div>
          <div>
            <label>Cupom:</label>
            <input type="text" value={cupom} onChange={e => setCupom(e.target.value)}/>
          </div>
        </div>
        <hr />
        <div>
          O total é {totalIng}
        </div>
        <button onClick={calcularIng}>Calcular</button>
      </div>

      <div className="secao">
        <h1> Calculadora </h1>
        <div>
          <input type="text" value={num1} onChange={e => setNum1(e.target.value)}/>
          <input type="text" value={num2} onChange={e => setNum2(e.target.value)}/>
          <div> = </div>
          <div className="res"> {res} </div>
        </div>
          <button onClick={somar}>Somar</button>
      </div>

      <div className="secao">
        <h1>Contador</h1>

        <div className="cont">
          <button onClick={aumentar}>+</button>
          {contador}
          <button onClick={diminuir}>-</button>
        </div>

      </div>

      <div className="secao">
        <h1>{tituloS2}</h1>

        <input type="text" value={tituloS2} onChange={alterarTitulo}/>

      </div>

    </div>
  )
}