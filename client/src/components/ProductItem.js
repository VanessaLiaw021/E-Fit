import React from 'react';
import styled from 'styled-components';

//Product item Component
const ProductItem = () => {

  //Styled component for card
  const Card = styled.div`
    border: 3px solid #ffe4e1;
    margin: 30px 40px;
    padding: 30px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
  `;

  //Styled Components for Button
  const Button = styled.button`
    background-color: #71a6d2;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 4px 4px 4px rgba(113, 166, 210, 0.6);
    width: 100px;
    height: 30px;
    color: white;
    font-size: 18px;
    cursor: pointer;
    display: block;
    margin: 20px auto 0 auto;
  `;

  return (
    <Card>
      <div className="image">
        <img 
          src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/ea224680-bbfc-4b59-bbb5-5044952f025c/women-s-shoes-clothing-accessories.jpg"
          alt="sample-image"
        />
      </div>
      <div className="content">
        <div className="card-header">
          <h3>Backpack</h3>
          <p>$20</p>
        </div>
        <p>Adidas on the go backpack</p>
      </div>
      <Button className="add-cart">Add To Cart</Button>
    </Card>
  );
};

//Export Product Item
export default ProductItem;