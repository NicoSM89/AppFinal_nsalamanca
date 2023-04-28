import React from "react";
import "./App.css";

//react - router - dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Header from "./Components/Header/Header";
import ResponsiveNavigation from "./Components/ResponsiveNavigation/ResponsiveNavigation";

//context 

import { ItemsProvider } from "./Context/ItemsContext";

//views

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Shop from "./views/Shop/Shop";
import AppProductDetail from "./views/AppProductDetail/AppProductDetail";
import Products from "./views/Products/Products";


const App = () => {
  return (
    <Router>
      <ItemsProvider>
        <div className="App">
          <Header />
          <ResponsiveNavigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products/:id" element={<AppProductDetail />} />
            <Route path="/products-detail/:products" element={<Products />} />
          </Routes>
        </div>
      </ItemsProvider>
    </Router>
  );
};

export default App;
