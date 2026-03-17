import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ id, title, price, image, description, category, stock }) => {
  const item = { id, title, price, image, category };
  const { cart } = useContext(CartContext);

const itemInCart = cart.find((i) => i.id === id);
const quantityInCart = itemInCart ? itemInCart.quantity : 0;

const availableStock = stock - quantityInCart;

  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <ItemCount stock={availableStock} initial={1} item={item} />
    </div>
  );
};

export default ItemDetail;