//Import required packages
import React from 'react';
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import CartItem from './CartItem';

//Cart Component
const Cart = ({ item }) => {
  return (
    <div className="main">
      <h2 className="headings">Your Cart</h2>
      <div className="cart-item">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

//Export Cart Component
export default Cart;