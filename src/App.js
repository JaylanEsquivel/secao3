import './App.css';

import Fc2 from './assets/fc2.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import Manager from './components/Manager';

function App() {
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


    </div>
  );
}

export default App;
