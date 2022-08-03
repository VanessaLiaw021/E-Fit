import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../utils/actions';
import { QUERY_CATEGORIES } from '../utils/queries';
import { idbPromise } from '../utils/helpers';

const Category = () => {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (name, id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: name === 'All' ? null : id,
    });
  };

  return (
    <div className="category">
      <ul>
        {categories.map((item) => (
          <button key={item._id}
            onClick={() => { handleClick(item.name, item._id)}}
          >{item.name}</button>
        ))}
      </ul>
    </div>
  );
};

//Export Category Component
export default Category;