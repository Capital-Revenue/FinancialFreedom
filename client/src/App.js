import React, { Component } from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./pages/Home"
import Chart from "./component/chart";
import LogIn from "./pages/LogIn";
import BudGet from "./pages/BudGet";

import "./App.css";

function App() { 
  const { user, loading, error} = useFirebaseAuth()
    return (
      <Router>
      <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/LogIn" component={LogIn} />
      <Route exact path="/BudGet" component={BudGet} />
      <Route exact path="/chart" component={Chart} />
      </div> 
      </Router>
    );
  }


export default App;
