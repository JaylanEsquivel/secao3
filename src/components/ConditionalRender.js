import { useState } from 'react'

const ConditionalRender = () => {

    const [x] = useState(false);

  return (
    <div>
        <b>Renderização Condicional</b>

        {x && <p>Sim</p>}
        {!x && <p>Não</p>}

    </div>
  )
}

export default ConditionalRender