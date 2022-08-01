//Import required packages
import React from 'react';
import ProductItem from './ProductItem';
import Footer from './Footer';

//ProductList Component
const ProductList = () => {
  return (
    <>
      <div className="main">
        <h2 className="headings">Products</h2>
        
        <div className="category">
          <ul>
            <li>All</li>
            <li>Women's Apparel</li>
            <li>Men's Apparel</li>
            <li>Equipments</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div className="product-card">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
      <Footer />
    </>
  );
};

//Export ProductList
export default ProductList;