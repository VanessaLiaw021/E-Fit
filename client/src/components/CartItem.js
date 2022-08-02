//Import required packages
import React from 'react';
import styled from "styled-components";

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

//Cart Item component
const CartItem = ({ item }) => {
  return (
    <Card>
      <div className="card-wrapper">
        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1be70022-ca48-46be-a8f3-7917435986e8/sportswear-womens-hoodie-pSSPss.png" alt="" className="cart-image"/>
        <CardContainer>
          <p>Women's Hoodie</p>
          <p>$23.99</p>
        </CardContainer>
        <CardContainer>
          <span className="quantity">Qty:</span>
          <input
              type="number"
              placeholder="1"
              className="quantity-num"
          />
          <span className="quantity">Size:</span>
          <input
              type="number"
              placeholder="1"
              className="quantity-num"
          />
        </CardContainer>
        <Button>Remove From Cart</Button>
      </div>
    </Card>
  );
};

//Export CartItem Component
export default CartItem;