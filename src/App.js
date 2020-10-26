import React from 'react';
import './App.css';
import Home from './Container/Home'
import Profile from './Container/Profile'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams 
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path='/' render={
        () => {
          return <Home />
        }
      }/>
      <Route exact path='/profile' render= {
        () => {
          return <Profile />
        }
      }/>
    </Router>
  );
}

export default App;
