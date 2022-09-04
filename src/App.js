import './App.css';
import './Components.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting ="¡Bienvenido!"/>
      <header className="App-header">
      </header>
    </div>
  );
};

export default App;
