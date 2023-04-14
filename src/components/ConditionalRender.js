import { useState } from 'react'

const ConditionalRender = () => {

  const [x] = useState(false);
  const [name, setName] = useState("João");

  return (
    <div>
      <b>Renderização Condicional</b>

      {x && <p>Sim</p>}
      {!x && <p>Não</p>}

      <b>IF TERNARIO</b>

      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>O nome não foi encontrado</p>
        </div>
      )}
      <button onClick={() => setName("Jaylan")} >Mudar Nome</button>

    </div>
  )
}

export default ConditionalRender