import './App.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import NewsArticles from './articles/NewsArticles';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import MyArticles from './articles/MyArticles';
import AlertComponent from './Alert';


function App() {
  const token = useSelector(st => st.userReducer.token);
  const alert = useSelector(st => st.alertReducer.alert);

  useEffect(function () {
    console.log('checking for token!');
    if (token) {
      localStorage.setItem('token', token);
    }
  }, [token]);


  return (
    <div className="App container">
      <NavBar />
      {alert.message ? <AlertComponent /> : ''}
      <Switch>
        <Route exact path='/articles'><MyArticles /></Route>
        <Route exact path='/login'><LoginForm /></Route>
        <Route exact path='/register'><RegisterForm /></Route>
        <Route exact path='/logout'><Redirect to='/' /></Route>
        <Route exact path='/:topic'><NewsArticles /></Route>
        <Route exact path='/'><Home /></Route>
      </Switch>
    </div>
  );
}

export default App;
