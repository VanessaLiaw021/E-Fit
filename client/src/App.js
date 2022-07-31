//Import required packages and files
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

//App Componennt
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<ProductList />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </>
    </Router>
  );
}

//Export App
export default App;
