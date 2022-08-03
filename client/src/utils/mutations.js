import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        size
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_PRODUCT = gql`
  mutation saveProduct($productData: ProductInput!) {
    saveProduct: (productData: $productData) {
      _id 
      email
      name
      image
      price
      savedProducts{
        _id
        name
        image
        prices
        size
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeProduct($productId: String!) {
    removeProduct: (productId: $productId) {
      _id 
      email
      name
      image
      price
      savedProducts{
        _id
        name
        image
        prices
        size
      }
    }
  }
`;
