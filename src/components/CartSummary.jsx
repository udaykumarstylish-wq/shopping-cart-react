import React from 'react';

function CartSummary({ cart }) {
const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="summary">
      <h4>Cart Summary</h4>
      <h4>Items in Cart: {cart.length}</h4> <p>Total Price: ₹{total}</p>
    </div>
  );
}
export default CartSummary;
