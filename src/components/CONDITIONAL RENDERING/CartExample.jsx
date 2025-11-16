//**Cart Message:** If `cartItems.length > 0`, show `"You have items in your cart"` else show `"Your cart is empty."`
import { useState } from "react";

function CartExample() {
  // 🛒 Step 1: store cart items in a state array
  const [cartItems, setCartItems] = useState([]);

  // 🧩 Step 2: function to add items to cart
  const addItem = () => {
    setCartItems([...cartItems, "New Item"]);
  };

  // 💥 Step 3: conditional rendering
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <p>You have {cartItems.length} item(s) in your cart</p>
      ) : (
        <p>Your cart is empty.</p>
      )}
      
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default CartExample;
