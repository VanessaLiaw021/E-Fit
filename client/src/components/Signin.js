//Import required packages and files
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import styled from 'styled-components';

//Styled Components for Button
const Button = styled.button`
background-color: #71a6d2;
border: none;
border-top-left-radius: 10px;
border-bottom-right-radius: 10px;
padding: 5px 0;
box-shadow: 4px 4px 4px rgba(113, 166, 210, 0.6);
width: 80px;
color: white;
font-size: 18px;
margin: 5px 0 20px 0;
cursor: pointer;
`;

const Signin = (props) => {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email address:</label>
        <input
          placeholder="Email"
          name="email"
          type="email"
          id="email"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pwd">Password:</label>
        <input
          placeholder="******"
          name="password"
          type="password"
          id="pwd"
          onChange={handleChange}
        />
      </div>
      <p id="account">Don't have an account? <Link to="/signup" className="direct-signin">Sign Up</Link></p>
      <Button type="submit">Sign In</Button>
    </form>
  );
};

export default Signin;