import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { render } from  'react-dom';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import BusinessNews from './Components/BusinessNews';
import Politics from './Components/Politics';
export default class App extends Component {
  
  
  render() {

    document.body.style.backgroundColor = "#a846ba";
    return (
      

      <Router>
        <Navbar />
        <Switch>

          <Route exact path="/">
            <News />
          </Route>

          <Route exact path="/business">
            <BusinessNews />

          </Route>

          <Route exact path="/politics">
            <Politics />
          </Route>
        </Switch>


        
      </Router>
    );
  }
}
