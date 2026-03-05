import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) return <p>Carrito vacío 🛒</p>;

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
          <img src={item.image} alt={item.title} width="100" />
          <h3>{item.title}</h3>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Subtotal: ${Number(item.price) * item.quantity}</p>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}
      <h2>Total: ${totalPrice()}</h2>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;