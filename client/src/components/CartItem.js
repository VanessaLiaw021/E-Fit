//Import required packages
import React from 'react';
import styled from "styled-components";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { Link } from 'react-router-dom';

//Styled Components for Div
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 10px 0 10px;
  padding: 0 10px;
  color: #71a6d2;
`;

//Styled Components for Button
const Button = styled.button`
  background-color: #71a6d2;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 5px 0;
  box-shadow: 4px 4px 4px rgba(113, 166, 210, 0.6);
  width: 160px;
  color: white;
  font-size: 17px;
  margin: 5px 0 20px 0;
  cursor: pointer;
`;

const sizes = ["S", "M", "L", "XL"]
//Cart Item component
const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  //Remove from cart function
  const removeFromCart = item => {
    dispatch({ type: REMOVE_FROM_CART, _id: item._id });
    idbPromise('cart', 'delete', { ...item });
  };

  //Check the change event
  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({ type: REMOVE_FROM_CART, _id: item._id });
      idbPromise('cart', 'delete', { ...item });
    } else {
      dispatch({ type: UPDATE_CART_QUANTITY, _id: item._id, purchaseQuantity: parseInt(value) });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
    };
  };

  return (
    <div className="card-wrapper">
      <img src={`/images/${item.image}`} alt={item.name} className="cart-image" />
      <div className="card-header-container">
        <Link to={`/products/${item._id}`} className="name"><h3>{item.name}</h3></Link>
        <p>${item.price}</p>
      </div>
      <CardContainer>
        <span className="quantity">Qty:</span>
        <input
          type="number"
          placeholder="1"
          className="quantity-num"
          value={item.purchaseQuantity}
          onChange={onChange}
        />
        <span className="quantity">Size:</span>
        {/* to do: attach onchange to sselect element => onchange will update the state of the cart */}
        <div className="size-option">
          <select className="size">
            {sizes.map((size, index) => <option key={size + index} className="options" value={size} selected={size===item.size}>{size}</option>)}
          </select>
        </div>
      </CardContainer>
      <Button onClick={() => removeFromCart(item)}>Remove From Cart</Button>
    </div>
  );
};

//Export CartItem Component
export default CartItem;