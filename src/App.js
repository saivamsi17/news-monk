import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import { render } from  'react-dom';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Branch from './Components/Branch';
import Department from './Components/Department';
import Home from './Components/Home';
export default class App extends Component {
  
  
  render() {

    document.body.style.backgroundColor = "#a846ba";


    const selection = "Hyderabad";
    return (
      

      <Router>
        <Navbar />

        <Switch>

          <Route exact path="/project">
            <Project />
          </Route>

          <Route exact path="/branch">
            <Branch selections = {selection} />

          </Route>

          <Route exact path="/department">
            <Department />
          </Route>


          <Route exact path="/">
            <Home />
          </Route>
        </Switch>


        
      </Router>
    );
  }
}
