import Item from "../Item/Item";
import style from "../../Components/ItemList/style.css";
import { Link } from "react-router-dom";

const ItemList = ({ lista }) => {
    console.log(lista);
  return (
    <div className="item-list">
        {
            lista.map((product)=>(
              <Link 
                key={product.id}
                to={"/detail/ + item.id"}
              >
                <Item 
                  id={product.id}
                  title={product.title} 
                  artist={product.artist} 
                  price={product.price} 
                  category={product.category}
                  image={product.image}
                  />
              </Link>
                
            ))
        }
    </div>
  )
}

export default ItemList