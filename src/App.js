import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Login from './Login';
import Home from './Home';

import './App.css';


const App = props => {
  return (
    <React.Fragment>

      
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
            
        
          <Route path="/home">
          <Home/>
          </Route>
         
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
