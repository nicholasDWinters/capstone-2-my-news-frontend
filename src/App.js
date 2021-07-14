import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import Home from './Home';
import NewsArticles from './NewsArticles';

function App() {

  return (
    <div className="App container">
      <NavBar />
      <Switch>
        <Route exact path='/articles'><MyArticles /></Route>
        <Route exact path='/login'><LoginForm /></Route>
        <Route exact path='/register'><RegisterForm /></Route>
        <Route exact path='/:topic'><NewsArticles /></Route>
        <Route exact path='/'><Home /></Route>

      </Switch>
    </div>
  );
}

export default App;
