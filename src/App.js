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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
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
