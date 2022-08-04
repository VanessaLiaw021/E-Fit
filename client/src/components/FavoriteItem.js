//Import required packages
import React from 'react';
import styled from "styled-components";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FROM_FAVORITE } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

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

  return (
    <div className="card-wrapper favWrapper">
      <img src={`/images/${item.image}`} alt={item.name} className="favorite-image"/>
      <div className="fav-wrapper">
        <p>{item.name}</p>
        <p className="fav-price">${item.price}</p>
      </div>
      <Button onClick={() => removeFromFavorite(item)}>Remove From Favorite</Button>
    </div>
  );
};

//Export FavoriteItem Component
export default FavoriteItem;