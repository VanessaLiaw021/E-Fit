//Import required packages
import React from 'react';
import styled from "styled-components";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

//Styled Component for div
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #ffe4e1;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 350px;
  margin: 50px auto;
`;

//Styled Components for Div
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 10px 0 10px;
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

//Cart Item component
const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({ type: REMOVE_FROM_CART, _id: item._id });
    idbPromise('cart', 'delete', { ...item });
  };

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
    <Card>
      <div className="card-wrapper">
        <img src={`/images/${item.image}`} alt={item.name} className="cart-image"/>
        <CardContainer>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </CardContainer>
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
          <input
              type="number"
              placeholder="1"
              className="quantity-num"
          />
        </CardContainer>
        <Button onClick={() => removeFromCart(item)}>Remove From Cart</Button>
      </div>
    </Card>
  );
};

//Export CartItem Component
export default CartItem;