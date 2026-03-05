import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;