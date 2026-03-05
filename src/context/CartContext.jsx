import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!item || !item.id) return;

    const exists = cart.find((i) => i.id === item.id);

    if (exists) {
      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => setCart(cart.filter((i) => i.id !== id));

  const clearCart = () => setCart([]);

  const totalQuantity = () => cart.reduce((acc, i) => acc + i.quantity, 0);

  const totalPrice = () =>
    cart.reduce((acc, i) => acc + i.quantity * (Number(i.price) || 0), 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};