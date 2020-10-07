import React, { useEffect, useState } from "react";

import "./App.css";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className='App'>
      <Header />
      <main className='py-3'>
        <Container>
          <Switch>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/product/:id'>
              <ProductDetail products={products} />
            </Route>
            <Route path='/cart/:id?'>
              <Cart />
            </Route>
          </Switch>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default App;
