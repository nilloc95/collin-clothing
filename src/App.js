import React from 'react';
import './App.css';
import HomePage from './Pages/Homepage/homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './Pages/Shop/shop'
import Header from './Components/header/header'



function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
