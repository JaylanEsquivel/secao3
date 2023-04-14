import React from 'react'

const ShowUserName = (props) => {
  return (
    <div>
        <h2>Valor Direto/O Nome do usuário é: {props.name}</h2>
        <h2>Valor por variavel/ O Nome do usuário é: {props.nameVar}</h2>
        <h2>Valor por State/ O Nome do usuário é: {props.nameState}</h2>
    </div>
  )
}

export default ShowUserName