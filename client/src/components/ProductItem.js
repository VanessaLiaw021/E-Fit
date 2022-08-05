//Import required packages and files
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../utils/helpers";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY, ADD_TO_FAVORITE} from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

//Styled Components for Button
const Button = styled.button`
  background-color: #71a6d2;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 5px 0;
  box-shadow: 4px 4px 4px rgba(113, 166, 210, 0.6);
  width: 80px;
  color: white;
  font-size: 16px;
  margin: 5px 0 10px 0;
  cursor: pointer;
`;

const ProductItem = (item) => {
  const [state, dispatch] = useStoreContext();
  const [isAdded, setAdded] = useState(false);

  const {
    image,
    name,
    size,
    _id,
    price,
    quantity
  } = item;

  const { cart, favorite } = state;

  //Function that add to cart page
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

  //Function that add to favorites page
  const addToFavorite = () => {
    const itemInFavorite = favorite.find((favoriteItem) => favoriteItem._id === _id)
    if (itemInFavorite) {
      idbPromise('favorite', 'put', { ...itemInFavorite, });
      setAdded(true);
    } else {
      dispatch({ type: ADD_TO_FAVORITE, product: { ...item }});
      idbPromise('favorite', 'put', { ...item });
    }
  };

  //Function that get the change of the selection size
  const handleChange = (e) => {
    
  };

  return (
    <div className="cardWrapper">
      <div className="wrapper">
        <Link to={`/products/${_id}`}>
          <img alt={name} src={`/images/${image}`}/>
        </Link>
        <button className="heart-icon">
          <FontAwesomeIcon 
            icon={faHeart} 
            onClick={addToFavorite} 
            style={{ color: isAdded ? 'red' : ' '}}
            className="heart"
          />
        </button>
      </div>
      <div className="card-header-container">
        <Link to={`/products/${_id}`} className="name"><h3>{name}</h3></Link>
        <p>${price}</p>
      </div>
      <div className="size">
        <select onChange={handleChange}>
          { size.map(size => <option value={size.value}>{size}</option>)}
        </select>
      </div>
      <div className="card-bottom">
        <Button onClick={addToCart} className="add-cart">Add to cart</Button>
        <p><span>{quantity}</span> {pluralize("item", quantity)} in stock</p>
      </div>
    </div>
  );
};

//Export ProductItem
export default ProductItem;