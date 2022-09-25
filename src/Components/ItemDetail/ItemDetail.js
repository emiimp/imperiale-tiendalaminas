import { useContext } from "react";
import style from "../../Components/ItemDetail/style.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export const ItemDetail = ({ product }) => {

  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  function onAdd (product) {
      addToCart(product, count);
  };

  return (
    <div className="item-detail">
      <Link to="/">Volver</Link> 
      <img src={product.image} alt={product.title}/>
      <h2>{product.title}</h2>
      <div className="product-information">
        <p>{product.artist}</p>
        <p>{product.price}</p>
        <p>{product.category}</p>
      </div>
      

      <div>
      <ItemCount stock={product.stock} count={count} price={product.price} setCount={setCount}/>
        <button className="add-btn" onClick={() => onAdd(product)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;