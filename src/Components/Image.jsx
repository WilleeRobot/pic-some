import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

function Image({ className, img }) {
  //   const [hovered, setHovered] = useState(false);
  const [hover, ref] = useHover();

  const { toggleFavorite, addToCart, removeFromCart, cartItems } =
    useContext(Context);

  const heartIcon = hover && (
    <i
      onClick={() => toggleFavorite(img.id)}
      className="ri-heart-line favorite"
    />
  );

  const favoritedIcon = (
    <i
      onClick={() => toggleFavorite(img.id)}
      className="ri-heart-fill favorite"
    />
  );

  function cartIcon() {
    if (cartItems.some((item) => item.id === img.id)) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}
        />
      );
    } else if (hover) {
      return (
        <i className="ri-add-circle-line cart" onClick={() => addToCart(img)} />
      );
    }
  }

  return (
    <div className={`${className} image-container`} ref={ref}>
      <img className="image-grid" src={img.url} />
      {img.isFavorite ? favoritedIcon : heartIcon}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
    url: PropTypes.string.isRequired,
  }),
};

export default Image;
