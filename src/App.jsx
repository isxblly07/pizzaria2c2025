import { useState } from "react"

function App(){

  const[nome, setNome] = useState('Ronaldo')
  const Formulario = () => {

    return (
      <div> 
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
    );
  };

  return (
    <div>
      <h3>Pizzaria 2c</h3>
      <Formulario/>
      <Formulario/>
      <Formulario/>
    </div>
  )
}
export default App