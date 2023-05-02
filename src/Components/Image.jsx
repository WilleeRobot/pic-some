import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { Context } from "../Context";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addToCart, removeFromCart, cartItems } =
    useContext(Context);

  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseLeave() {
    setHovered(false);
  }

  const heartIcon = hovered && (
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
    } else if (hovered) {
      return (
        <i className="ri-add-circle-line cart" onClick={() => addToCart(img)} />
      );
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
