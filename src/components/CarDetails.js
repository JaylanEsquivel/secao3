const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>

        <ul>
            <li>Modelo: {brand}</li>
            <li>km: {km}</li>
            <li>Cor: {color}</li>
        </ul>

        {newCar && <p>Este carro é Novo!</p> }

    </div>
  )
}

export default CarDetails