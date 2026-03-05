import { Link } from "react-router-dom";

const Item = ({ id, title, price, image }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <img src={image} alt={title} width="200" />
      <h3>{title}</h3>
      <p>${price}</p>

      <Link to={`/item/${id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};

export default Item;