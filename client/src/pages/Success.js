//Import required packages
import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
import styled from 'styled-components';

//Styled component for success message
const SuccessMessage = styled.div`
  font-size: 30px;
  text-align: center;
  margin-top: 50px;
`;

//Success Component
const Success = () => {

  //Add the order to cart
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;
        productData.forEach((item) => { idbPromise('cart', 'delete', item)});
      }

      //Set a time for the success message to display
      setTimeout(() => { window.location.assign('/') }, 3000);
    }

    //Call the save order function
    saveOrder();

  }, [addOrder]);

  return (
    <SuccessMessage>
        <h2>Thank you for your Order!</h2>
        <p>You're order will be process within 5 days to 7 days</p>
    </SuccessMessage>
  );
};

//Export Success Component
export default Success;