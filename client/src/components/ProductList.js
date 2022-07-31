import React from 'react';
import styled from 'styled-components';

const ProductList = () => {
  return (
    <div className="main">
      <h2 className="headings">Products</h2>
      
      <div className="category">
        <ul>  
          <li>All</li>
          <li>Women's Apparel</li>
          <li>Men's Apparel</li>
          <li>Equipment</li>
          <li>Accessories</li>
        </ul>
      </div>
    </div>
  )
}

export default ProductList;