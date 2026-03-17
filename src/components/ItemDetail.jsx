import ItemCount from "./ItemCount";

const ItemDetail = ({ id, title, price, image, description, category, stock }) => {
  const item = { id, title, price, image, category };

  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <ItemCount stock={stock} initial={1} item={item} />
    </div>
  );
};

export default ItemDetail;