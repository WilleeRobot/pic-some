import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Header() {
  const { cartItems } = useContext(Context);
  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>
      <Link to="/cart">
        {cartItems.length > 0 ? (
          <i className="ri-shopping-cart-fill ri-fw ri-2x" />
        ) : (
          <i className="ri-shopping-cart-line ri-fw ri-2x" />
        )}
      </Link>
    </header>
  );
}

export default Header;
