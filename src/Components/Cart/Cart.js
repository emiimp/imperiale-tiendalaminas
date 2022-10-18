import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc, getFirestore, updateDoc, doc } from "firebase/firestore";
import moment from "moment/moment";

export const Cart = () => {

    const navigate = useNavigate();
    const { cart, clear, removeItem, totalPrice } = useContext(CartContext);
    const [order, setOrder] = useState({
        buyer: {
            name: 'Juan',
            phone: '123456789',
            email: 'test@test.com'
    }, 
    items: cart,
    date: moment().format('DD/MM/YYYY'),  
    total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0)});

    const db = getFirestore();

    const createOrder = () => {
        const query = collection(db, 'orders');
        addDoc (query, order).then((docRef) => {
            alert('Orden creada con exito');
        }).catch((error) => {
            console.log('Error adding document: ', error);
            alert('Error al crear la orden');
        });
    };


    const updateStock = () => {
        const batch = db.batch();
        const query = collection(db, 'products');
        cart.forEach((item) => {
            const docRef = doc(db, 'products', item.id);
            batch.update(docRef, { stock: item.stock - item.quantity });
        });
        batch.commit().then(() => {
            console.log('Stock actualizado');
        }).catch((error) => {
            console.log('Error al actualizar el stock', error);
        });
    };

    const handleInputChanges = (e) => {
        setOrder((currentOrder) => ({
            ...currentOrder,
            buyer: {
                ...currentOrder.buyer,
                [e.target.name]: e.target.value
            }
        }));
    };

    const handleOrder = (e) => {
        e.preventDefault();
        createOrder();
        updateStock();
        clear();
        navigate('/cart/checkout');
    };

    
    return (
        (<div>
        
        <h2>Carrito</h2>

        {cart.length === 0 ? (
            
            <>

            <p>No hay productos en el carrito</p> 
            <Link to={'/laminas'}>Volver a comprar</Link>

            </>

        ):(
                <>

                    {cart.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt={item.title}/>
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                        <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
                    </div>
            ))}
                </>
        )}

            <div>
                <button onClick={createOrder}>Crear orden</button>
            </div>

        </div>
        ));

    };

export default Cart;

