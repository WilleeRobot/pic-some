import PropTypes from "prop-types";
import { Context } from "../Context";
import { useContext } from "react";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
  //   const [deleteActive, setDeleteActive] = useState(false);
  const [hover, ref] = useHover();
  const { removeFromCart } = useContext(Context);

  return (
    <div className="cart-item">
      <i
        className={hover ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
        onClick={() => removeFromCart(item.id)}
        ref={ref}
      />
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default CartItem;
