import { useState } from 'react';
import './App.css';

import Fc2 from './assets/fc2.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import Manager from './components/Manager';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {

  const name = "Jaylan";
  const [username] = useState("Jaylan");

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
      <CarDetails brand="VW" km={100} color="Preto"  newCar={false} />
      {/* Reaproveitando Componentes */}
      <CarDetails brand="Ford" km={10000} color="Branco"  newCar={false} />
      <CarDetails brand="Fiat" km={0} color="Vermelho" newCar={true}  />


    </div>
  );
}

export default App;
