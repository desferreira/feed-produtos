import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom'
import "./output.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CounterExample from './components/CounterExample';
import About from './components/pages/About';
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="app-header">

      <Router>
      <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
