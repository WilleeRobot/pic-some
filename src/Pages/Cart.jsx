import { useContext } from "react";
import { Context } from "../Context";
import CartItem from "../Components/CartItem";

function Cart() {
  const { cartItems } = useContext(Context);
  const cartItemElements = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  function calculateTotal() {
    let totalCost = cartItemElements.length * 5.99;
    return totalCost.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return (
    <main className="cart-page">
      <h1>Checkout</h1>
      {cartItemElements}
      <p className="total-cost">Total: {calculateTotal()}</p>
      <div className="order-button">
        <button>Place order</button>
      </div>
    </main>
  );
}

export default Cart;
