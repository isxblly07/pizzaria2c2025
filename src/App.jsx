import { useState } from "react"

function App(){

  const[nome, setNome] = useState('Ronaldo')

  return (
    <div>
      <h3>Pizzaria 2c</h3>
      <input
      className="nome"
      onChange={(e)=>{setNome(e.target.value)}}
      name="nome"
      type="text"/>
      <button 
      onClick={()=>{alert(nome)}}
      className="botão">
        CLIQUE AQUI
      </button>
    </div>
  )
}
export default App