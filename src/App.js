import './App.css';
import './Components.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Counter from './Components/Counter/Counter.js';


function App() {

  const stock = 3;

  return (
    <div className="App">

      <NavBar/>

      <ItemListContainer greeting ="¡Bienvenido!"/>

      <Counter stock={stock}/>

      <header className="App-header">
      </header>
      
    </div>
  );
};

export default App;
