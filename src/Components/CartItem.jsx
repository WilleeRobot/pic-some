import PropTypes from "prop-types";
import { Context } from "../Context";
import { useContext } from "react";

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);
  return (
    <div className="cart-item">
      <i
        className="ri-delete-bin-line"
        onClick={() => removeFromCart(item.id)}
      />
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
