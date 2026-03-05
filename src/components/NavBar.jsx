import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/category/vinilos">Vinilos</Link>
      <Link to="/category/instrumentos">Instrumentos</Link>
      <Link to="/cart">
        <CartWidget />
      </Link>
      <Link to="/checkout">Checkout</Link>
    </nav>
  );
};

export default NavBar;