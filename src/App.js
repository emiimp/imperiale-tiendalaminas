import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Components.css';
import ItemListContainer from './Components/Pages/ItemListContainer/ItemListContainer';
import Counter from './Components/Counter/Counter.js';
import ItemDetailContainer from './Components/Pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar';


function App() {

  const stock = 3;

  return (

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="contacto" element={<div>Contacto</div>} />
        <Route path="category/:id" element={<ItemListContainer/>} />
        <Route path="detail/:id" element={<ItemDetailContainer/>} />
        <Route path="category/:categoryName" element={<ItemListContainer />}/>

      </Routes>
    
      <ItemListContainer greeting ="¡Bienvenido!"/>

      <ItemDetailContainer/>

      <Counter stock={stock}/>

    </BrowserRouter>
    
  );
};

export default App;
