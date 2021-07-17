import './App.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import NewsArticles from './articles/NewsArticles';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import MyArticles from './articles/MyArticles';
import AlertComponent from './Alert';

function App() {
  const alert = useSelector(st => st.alertReducer.alert);

  return (
    <div className="App container">
      <NavBar />
      {alert.message ? <AlertComponent alert={alert} /> : ''}
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
