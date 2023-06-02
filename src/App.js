import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import Home from './Components/Home.js';
import Random from './Components/Random.js';
import MyDateNight from './Components/MyDateNight.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './Components/Nav';


export default function App() {

  return (
    <Router>
      <div>
      <Nav/>
        <Switch>
          <Route path="/myDateNight">
            <MyDateNight />
          </Route>

					<Route path="/random">
            <Random />
          </Route>
           
					<Route path="/">
            <Home />
          </Route>
          
				</Switch>
      </div>
    </Router>
  );
}
