import Item from "../Item/Item";
import { Link } from "react-router-dom";


const ItemList = ({ lista }) => {
    console.log(lista);
  return (
    <div className="item-list">
        {
            lista.map((item)=>(
              <Link 
                key={item.id}
                to={"/detail/ + item.id"}
              >
                <Item 
                  id={item.id}
                  title={item.title} 
                  artist={item.artist} 
                  price={item.price} 
                  category={item.category}
                  image={item.image}
                  stock={item.stock}
                  />
                
              </Link>
                
            ))
        }
    </div>
  )
}

export default ItemList