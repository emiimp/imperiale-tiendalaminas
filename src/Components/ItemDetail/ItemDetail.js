import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export const ItemDetail = ({ item }) => {

  const { addItem } = useContext(CartContext);
  const [count, setCount] = useState(1);

  function onAdd (item) {
      addItem(item, count);
  };

  return (
    <div className="item-detail">
      <Link to="/">Volver</Link> 
      <img src={item.image} alt={item.title}/>
      <h2>{item.title}</h2>
      <div className="item-information">
        <p>{item.artist}</p>
        <p>{item.price}</p>
        <p>{item.category}</p>
      </div>
      

      <div>
      <ItemCount stock={item.stock} count={count} price={item.price} setCount={setCount}/>
        <button className="add-btn" onClick={() => onAdd(item)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;