import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { pluralize } from "../utils/helpers"
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

//Product item Component
function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity,
    description
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };

  //Styled Components for Button
  const Button = styled.button`
    background-color: #71a6d2;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 4px 4px 4px rgba(113, 166, 210, 0.6);
    width: 100px;
    height: 30px;
    color: white;
    font-size: 18px;
    cursor: pointer;
    display: block;
    margin: 20px auto 0 auto;
  `;

  return (
    <div className="card">
      
      <div className="image">
        <img
          src={image}
          alt={name}
        />
      </div>
      <div className="content">
        <div className="card-header">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
        <p>{description}</p>
      </div>
      <Button className="add-cart">Add To Cart</Button>
    </div>
  );
};

//Export Product Item
export default ProductItem;