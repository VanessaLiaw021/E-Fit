//Import required packaged
import React from 'react';
import styled from 'styled-components';

 //Styled component for fotter
 const FooterWrapper = styled.footer`
  text-align: center;
  background-color: #ffe4e1;
  padding: 20px;
  letter-spacing: 2px;
`;

//Footer Component
const Footer = () => {

  return (
    <FooterWrapper>
        <p>@2022 Created by Vanessa Liaw, Graham Purnell, Marquise Allen, Raymond Dover</p>
    </FooterWrapper>
  )
}

//Export Footer Component
export default Footer;