import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return <span>🛒 {totalQuantity()}</span>;
};

export default CartWidget;