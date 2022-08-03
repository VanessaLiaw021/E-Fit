//Import required packages
import React from 'react';
import styled from "styled-components";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FROM_FAVORITE, UPDATE_FAVORITE_QUANTITY } from "../utils/actions";
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

//Favorite Item component
const FavoriteItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromFavorite = item => {
    dispatch({ type: REMOVE_FROM_FAVORITE, _id: item._id });
    idbPromise('favorite', 'delete', { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({ type: REMOVE_FROM_FAVORITE, _id: item._id });
      idbPromise('favorite', 'delete', { ...item });
    } else {
      dispatch({ type: UPDATE_FAVORITE_QUANTITY, _id: item._id, purchaseQuantity: parseInt(value) });
      idbPromise('favorite', 'put', { ...item, purchaseQuantity: parseInt(value) });
    };
  };

  return (
    <Card>
      <div className="card-wrapper">
        <img src={`/images/${item.image}`} alt={item.name} className="favorite-image"/>
        <div className="fav-wrapper">
          <p>{item.name}</p>
          <p className="fav-price">${item.price}</p>
        </div>
        <Button conClick={() => removeFromFavorite(item)}>Remove From Favorite</Button>
      </div>
    </Card>
  );
};

//Export FavoriteItem Component
export default FavoriteItem;