import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    
  const [cart, setCart] = useState([]);

     const addToCart = (item, quantity) => {
      
       const isInCart = cart.find((i) => i.item.id === item.id);
        if (isInCart) {
            isInCart.quantity += quantity;
            setCart([...cart]);
            alert("El producto ya se encuentra en el carrito");
        } else {
            setCart([...cart, { ...item, quantity }]);
            console.log('cart', [...cart, { ...item, quantity }]);
            alert("Producto agregado al carrito");
        } 
    }; 

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
        {children}
    </CartContext.Provider>
  );
};

export default CartProvider;