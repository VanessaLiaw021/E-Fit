//Import required packages and files
import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../utils/helpers"
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY, ADD_TO_FAVORITE} from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import styled from "styled-components";


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

function ProductItem(item) {


  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    size,
    _id,
    price,
    quantity
  } = item;
  console.log(item, "items");
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
  }
  const addToFavorite = () => {
    const itemInFavorite = cart.find((favoriteItem) => favoriteItem._id === _id)
    if (itemInFavorite) {
      idbPromise('favorite', 'put', {
        ...itemInFavorite,
   
      });
    } else {
      dispatch({
        type: ADD_TO_FAVORITE,
        product: { ...item }
      });
      idbPromise('favorite', 'put', { ...item });
    }
  }
  console.log(size, "Sizes");
  return (
    <div className="cardWrapper">
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`/images/${image}`}/>
      </Link>
      <div className="card-header-container">
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
      <p>{size}</p>
      <div className="card-bottom">
        <Button onClick={addToCart} className="add-cart">Add to cart</Button>
        <Button onClick={addToFavorite} className="add-cart">Add to Favorites</Button>
        <p><span>{quantity}</span> {pluralize("item", quantity)} in stock</p>
      </div>
    </div>
  );
};

//Export ProductItem
export default ProductItem;