import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({product}) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log(count);
  };
  return (
    <div className="item-detail">
      <h1>{product.title}</h1>
      <p>{product.id}</p>
      <p>{product.artist}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <p>{product.stock}</p>
      <img src={product.image} alt="Imagen del producto"/>
      
      <ItemCount setCount={setCount} count={count}/>
      <Link to={'/cart'} onClick={handleClick}>
        Ir al carrito
      </Link>
    </div>
  );
};

export default ItemDetail;