const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>

        <ul>
            <li>Modelo: {brand}</li>
            <li>km: {km}</li>
            <li>Cor: {color}</li>
        </ul>



    </div>
  )
}

export default CarDetails