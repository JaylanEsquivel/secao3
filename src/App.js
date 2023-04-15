import { useState } from 'react';
import './App.css';

import Fc2 from './assets/fc2.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import Manager from './components/Manager';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import ChildrenProp from './components/ChildrenProp';
import ExecuteFunction from './components/ExecuteFunction';

function App() {

  const name = "Jaylan";
  const [username] = useState("Jaylan");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelho", km: 0, newCar: true },
    { id: 2, brand: "Fiat", color: "Prata", km: 1000, newCar: false },
    { id: 3, brand: "Fiat", color: "Azul", km: 0, newCar: true }
  ]

  function showMessage(){
    console.log("Estou sendo passado por Props");
  }

  return (
    <div className="App">
      <h1>Avançando com React</h1>

      {/* Imagen no public */}
      <div>
        <img src="/fc.jpg" alt="fsociety 1" width="200" />
      </div>
      {/* Imagen no assets */}
      <div>
        <img src={Fc2} alt="fsociety 2" width="200" />
      </div>

      <Manager />

      <ListRender />

      <ConditionalRender />
      {/* Props */}
      <ShowUserName name="Jaylan" nameVar={name} nameState={username} />
      {/* Destruturando props */}
      <CarDetails brand="VW" km={100} color="Preto" newCar={false} />
      {/* Reaproveitando Componentes */}
      <CarDetails brand="Ford" km={10000} color="Branco" newCar={false} />
      <CarDetails brand="Fiat" km={0} color="Vermelho" newCar={true} />
      {/* Loop de arrays de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}
      {/* Fragmentos */}

      <Fragment />

      {/* Children prop */}

      <ChildrenProp >
        <div>
          <p>AQUI È UM CHILDREN PROP</p>
        </div>
      </ChildrenProp>

      {/* Passando Função por props */}

      <ExecuteFunction showMessage={showMessage}/>


    </div>
  );
}

export default App;
