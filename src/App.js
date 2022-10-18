import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Components.css';
import ItemListContainer from './Components/Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/Pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar';
import CartProvider from './Context/CartProvider';
import Cart from './Components/Cart/Cart';
import Inicio from './Components/Inicio/Inicio';

function App() {

  return (

    <CartProvider>

      <BrowserRouter>

        <NavBar/>
        <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/laminas" element={<ItemListContainer />}/>
        <Route path="detail/:id" element={<ItemDetailContainer/>} />
        <Route path="category/:category" element={<ItemListContainer />}/>
        <Route path="cart" element={<Cart/>} />
        </Routes> 
        
      </BrowserRouter>

    </CartProvider>

    
    
  );
};

export default App;
