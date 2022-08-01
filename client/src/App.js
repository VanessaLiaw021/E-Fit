//Import required packages and files
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Exercises from "./components/Exercises";
import ProductList from "./components/ProductList";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

//App Componennt
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <>
      <StoreProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/exercises" element={<Exercises />}/>
          <Route path="/products" element={<ProductList />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
        </StoreProvider>
      </>
    </Router>
    </ApolloProvider>
  
  );
}

//Export App
export default App;
