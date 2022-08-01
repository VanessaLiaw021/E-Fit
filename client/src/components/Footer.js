//Import required packaged
import React from 'react';
import styled from 'styled-components';

//Footer Component
const Footer = () => {

  //Styled component for fotter
  const Footer = styled.footer`
    text-align: center;
    background-color: #ffe4e1;
    padding: 20px;
    letter-spacing: 2px;
  `;

  return (
    <Footer>
        <p>@2022 Created by Vanessa Liaw, Graham Purnell, Marquise Allen, Raymond Dover</p>
    </Footer>
  )
}

//Export Footer Component
export default Footer;