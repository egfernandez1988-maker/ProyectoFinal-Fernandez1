import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.phone) {
      alert("Por favor completa todos los campos");
      return;
    }

    const order = {
      buyer,
      items: cart,
      total: totalPrice(),
      date: serverTimestamp(),
    };

    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al generar la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Generando orden...</p>;
  if (orderId)
    return (
      <div>
        <h2>¡Gracias por tu compra! 🎉</h2>
        <p>Tu ID de orden es: <strong>{orderId}</strong></p>
      </div>
    );

  return (
    <form onSubmit={handleSubmit}>
      <h2>Datos del comprador</h2>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={buyer.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={buyer.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Teléfono"
        value={buyer.phone}
        onChange={handleChange}
        required
      />
      <button type="submit">Confirmar compra</button>
    </form>
  );
};

export default CheckoutForm;