import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Products from './components/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import Details from './components/Details';
import { Navbar } from './components/Navbar';
import { CartProvider } from './context/cart';

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details" element={<Details />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;

