import {React, useState} from 'react'



const Manager = () => {

    let someData = 10;

    console.log(someData)
    const [number, setNumber] = useState(15);
  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar Variavel</button>
        </div> 
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>Mudar Variavel</button>
        </div>
    </div>
  )
}

export default Manager