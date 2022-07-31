//Import required packages and files
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//App Componennt
function App() {
  return (
    <Router>
      <>
        <Navbar />
      </>
    </Router>
  );
}

//Export App
export default App;
