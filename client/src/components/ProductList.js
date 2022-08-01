//Import required packages
import React, { useEffect } from 'react';
import ProductItem from './ProductItem';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS, QUERY_ALL_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import Category from './Category';
import Footer from './Footer';

//ProductList Component
const ProductList = () => {
  const [state, dispatch] = useStoreContext();

  const currentCategory = null;

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  const products = data?.products || [];

  // useEffect(() => {
  //   if (data) {
  //     dispatch({
  //       type: UPDATE_PRODUCTS,
  //       products: data.products,
  //     });
  //     data.products.forEach((product) => {
  //       idbPromise('products', 'put', product);
  //     });
  //   } else if (!loading) {
  //     idbPromise('products', 'get').then((products) => {
  //       dispatch({
  //         type: UPDATE_PRODUCTS,
  //         products: products,
  //       });

  //     });
  //   }
  // }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return products;
    }

    return products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <>
      <div className="main">
        <h2 className="headings">Products</h2>

        <Category />

        <div className="product-card">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
              quantity={product.quantity}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

//Export ProductList
export default ProductList;