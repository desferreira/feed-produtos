import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'
import "./output.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import ProductDetail from "./components/pages/ProductDetail";
import About from './components/pages/About';
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route  path="/products/:id">
            <ProductDetail />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
