import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemCount = ({ stock, initial, item }) => {
  const [count, setCount] = useState(initial);
  const [added, setAdded] = useState(false);
  const { addItem } = useContext(CartContext);

  const increment = () => count < stock && setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);

  const handleAdd = () => {
    if (!item || !item.id) {
      console.error("Item inválido", item);
      return;
    }
    addItem(item, count);
    setAdded(true);
  };

  return (
    <div>
      {!added ? (
        <>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
          <button onClick={handleAdd}>Agregar al carrito</button>
        </>
      ) : (
        <p>Agregado al carrito ✅</p>
      )}
    </div>
  );
};

export default ItemCount;