//Import required packages
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import styled from 'styled-components';

//Styled Components for Button
const Button = styled.button`
  background-color: #71a6d2;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 5px 0;
  box-shadow: 4px 4px 4px rgba(113, 166, 210, 0.6);
  width: 150px;
  color: white;
  font-size: 18px;
  margin: 5px 25px 20px 0;
  cursor: pointer;
`;

//Styled Components for Button
const Button2 = styled.button`
  background-color: #71a6d2;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 5px 0;
  box-shadow: 4px 4px 4px rgba(113, 166, 210, 0.6);
  display: block;
  width: 170px;
  color: white;
  font-size: 18px;
  margin: 50px auto 20px auto;
  cursor: pointer;
`;

//Single Product Page
const SingleProduct = () => {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <div className="main">
      <>
      {currentProduct && cart ? (
        <div className="single">
          <div>
            <img src={`/images/${currentProduct.image}`} alt={currentProduct.name}/>
          </div>
          
          <div className="single-content">
            <h2>{currentProduct.name}</h2>
            <p className="description">{currentProduct.description}</p>
            <p className="single-price">Price: <span>${currentProduct.price}{' '}</span></p>
            <br></br>
            <div className="button-group">
              <Button onClick={addToCart}>Add to Cart</Button>
              <Button
                disabled={!cart.find((p) => p._id === currentProduct._id)}
                onClick={removeFromCart}
              >Remove from Cart</Button>
            </div>
          </div>
        </div>
      ) : null}
        <Button2><Link to="/products" className="go-back">← Back to Products</Link></Button2>
      </>
    </div>
  )
}

//Export Single Product Page
export default SingleProduct;