import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    
  const [cart, setCart] = useState([]);

     const addItem = (item, quantity) => {
      
       if (isInCart(item.id)) {
        alert("El producto ya se encuentra en el carrito");
      }
      else {
        setCart([...cart, {item, quantity}]);
        alert ("Producto agregado al carrito");
      };

      console.log('cart', [...cart, {item, quantity}]);

    };
  
  const isInCart = (id) => {
    return cart.find((item) => item.id === id);
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (itemId) => {

    let index = cart.findIndex((item) => item.id === itemId);
    let newCart = [];
    cart.forEach((item) => {
      if (item.id === itemId) {
       console.log(item);
      }else {
        newCart.push(item);
      } 
    });
    setCart(newCart);
    };
  
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
        {children}
    </CartContext.Provider>
  );

};

export default CartProvider;