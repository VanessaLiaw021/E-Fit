//Import required packages
import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import FavoriteItem from './FavoriteItem';
import Auth from '../utils/auth';
import { useStoreContext } from '../utils/GlobalState';
import { ADD_MULTIPLE_TO_FAVORITES } from '../utils/actions';
import styled from 'styled-components';


//Load Strip
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

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
  margin: 10px auto 0 auto;
  cursor: pointer;
  display: block;
`;

//Cart Component
const Favorites = ({ item }) => {

  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getFavorite() {
      const favorite = await idbPromise('favorite', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_FAVORITES, products: [...favorite] });
    }

    if (!state.favorite.length) {
      getFavorite();
    }
  }, [state.favorite.length, dispatch]);


  function calculateTotal() {
    let sum = 0;
    state.favorite.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  
    function submitCheckout() {
    const productIds = [];

    state.favorite.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });
    getCheckout({
      variables: { products: productIds },
    });
  };

  return (
    <>
    <div className="main">
      <h2 className="headings">Favorites</h2>
      <div className="favorite-item">
        {state.favorite.map(item => (
          <FavoriteItem key={item.id} item={item}/>
        ))}
      </div>
      <hr></hr>
      <p className="text-center price"><span className="total">Total:</span>${calculateTotal()}</p>
      {Auth.loggedIn() ? (
        <Button onClick={submitCheckout}>Checkout</Button>
      ) : (
        <span>(log in to check out)</span>
      )}
    </div>
    </>
  );
};

//Export Cart Component
export default Favorites;