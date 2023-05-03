import PropTypes from "prop-types";
import { Context } from "../Context";
import { useContext, useState } from "react";

function CartItem({ item }) {
  const [deleteActive, setDeleteActive] = useState(false);
  const { removeFromCart } = useContext(Context);

  return (
    <div className="cart-item">
      <i
        className={deleteActive ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
        onClick={() => removeFromCart(item.id)}
        onMouseOver={() => setDeleteActive(true)}
        onMouseLeave={() => setDeleteActive(false)}
      />
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
