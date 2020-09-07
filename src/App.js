import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom'
import "./output.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CounterExample from './components/CounterExample';

function App() {
  return (
    <div className="app-header">

      <Router>
      <Header />
          <Switch>
            <Route exact path="/">
              <CounterExample />
            </Route>
            <Route path="/about"></Route>
          </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
