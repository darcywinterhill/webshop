import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import './App.css';

import Header from "./components/Header";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={<Main />} 
          />
          <Route 
            path="/shop" 
            element={<Shop />}
          />
          <Route 
            path="/about" 
            element={<About />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
