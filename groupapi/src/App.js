import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (

    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' render={() =>
          <div>
            sign in / up
            {/* SIGN IN / SIGN UP */}
          </div>
          }/>
          <Route exact path='/Home' render={() =>
          <div>
            <Navigation />
            Home
          </div>
          }/>
          <Route exact path='/One' render={() =>
          <div>
            <Navigation />
            1
            {/* API ONE SHIT */}
          </div>
          }/>
          <Route exact path='/Two' render={() =>
          <div>
            <Navigation />
            2
            {/* API TWO SHIT */}
          </div>
          }/>
          <Route exact path='/Three' render={() =>
          <div>
            <Navigation />
            3
            {/* API THREE SHIT */}
          </div>
          }/>
          <Route exact path='/Four' render={() =>
          <div>
            <Navigation />
            4
            {/* API FOUR SHIT */}
          </div>
          }/>
          <Route exact path='/Five' render={() =>
          <div>
            <Navigation />
            5
            {/* API FIVE SHIT */}
          </div>
          }/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
