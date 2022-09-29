import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, addItem, removeItem } = useContext(CartContext);
     
    console.log('cart', cart);
    
    return (
        (<div>
        
        <h2>Carrito</h2>

        {cart.length === 0 ? (
            
            <>
            <p>No hay productos en el carrito</p> 
            <Link to="/laminas">Volver a comprar</Link>

            </>

        )
        : 
        (
                <>

                    {cart.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt={item.title}/>
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                    </div>
            ))}

                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
            
            
                </>

        )}
        
        </div>

        )
    );
};

export default Cart;