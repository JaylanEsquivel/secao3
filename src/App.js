import { useState } from 'react';
import './App.css';

import Fc2 from './assets/fc2.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import Manager from './components/Manager';
import ShowUserName from './components/ShowUserName';

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

        <ShowUserName name="Jaylan" nameVar={name} nameState={username} />


    </div>
  );
}

export default App;
