/* import { useState } from 'react';
import style from '../../Components/Counter/style.css';

const Counter = ({ stock }) => {

  const [items, setItems] = useState(0);

  const sumar = () => items < stock ? setItems(items + 1) : alert('Se alcanzó el máximo, no hay más stock disponible.');

  const restar = () => items > 0 ? setItems(items - 1) : alert('No se han agregado productos.');

  return (
    <div className='contador'>
      <div>{items} items en el carrito</div>
      <div>Stock disponible: {stock} unidades</div>
      <button className='botonRestar' onClick={restar}>-</button>
      <button className='botonSumar' onClick={sumar}>+</button>
    </div>
  );
};

export default Counter; */