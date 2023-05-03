import { useContext, useState, useEffect } from "react";
import { Context } from "../Context";
import CartItem from "../Components/CartItem";

function Cart() {
  const [placingOrder, setPlacingOrder] = useState(false);
  const { cartItems, setCartItems } = useContext(Context);
  const cartItemElements = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  useEffect(() => {
    if (placingOrder) {
      setTimeout(() => {
        console.log("Order placed!");
        setCartItems([]);
        setPlacingOrder(false);
      }, 3000);
    }
  }, [placingOrder]);

  function calculateTotal() {
    let totalCost = cartItemElements.length * 5.99;
    return totalCost.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  function placeOrder() {
    setPlacingOrder(true);
  }

  const buttonDiv = (
    <div className="order-button">
      <button onClick={placeOrder}>
        {placingOrder ? "Ordering..." : "Place order"}
      </button>
    </div>
  );

  return (
    <main className="cart-page">
      <h1>Checkout</h1>
      {cartItemElements}
      <p className="total-cost">Total: {calculateTotal()}</p>
      {cartItems.length > 0 && buttonDiv}
    </main>
  );
}

export default Cart;
