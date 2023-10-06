import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/template";
import { Orbit } from "@uiball/loaders";
import { DotSpinner } from "@uiball/loaders";
import ProductDetails from "./components/productDetails";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route
            exact
            path="/product-details/:id"
            element={<ProductDetails />}
          />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
