import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Components.css';
import ItemListContainer from './Components/Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/Pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar';
import ItemDetail from './Components/ItemDetail/ItemDetail';

function App() {

  const stock = 3;

  return (

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/laminas" element={<ItemListContainer />}/>
        <Route path="contacto" element={<div>Contacto</div>} />
        <Route path="detail/:id" element={<ItemDetailContainer/>} />
        <Route path="category/:category" element={<ItemListContainer />}/>
      </Routes> 
      
    </BrowserRouter>

    
    
  );
};

export default App;
