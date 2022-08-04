//Import required packages
import React, { useEffect } from 'react';
import { idbPromise } from '../utils/helpers';
import FavoriteItem from './FavoriteItem';
import { useStoreContext } from '../utils/GlobalState';
import { ADD_MULTIPLE_TO_FAVORITES } from '../utils/actions';

//Cart Component
const Favorites = ({ item }) => {

  const [state, dispatch] = useStoreContext();
  
  useEffect(() => {
    async function getFavorite() {
      const favorite = await idbPromise('favorite', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_FAVORITES, products: [...favorite] });
    }

    if (!state.favorite.length) getFavorite();
    
  }, [state.favorite.length, dispatch]);

  return (
    <>
      <div className="main">
        <h2 className="headings">Favorites</h2>
          {state.favorite.length ? (
            <>
              <div className="favorite-item">
                {state.favorite.map(item => (
                  <FavoriteItem key={item._id} item={item}/>
                ))}
              </div>
            </>
          ): (
            <h3 className="text-center mt-5">You have no saved items!</h3>
          )}
      </div>
    </>
  );
};

//Export Cart Component
export default Favorites;