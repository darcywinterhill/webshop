import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import './App.css';

import Header from "./components/Header";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";

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
          <Route 
            path="/blog" 
            element={<Blog />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
