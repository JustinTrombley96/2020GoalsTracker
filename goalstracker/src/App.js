import React from 'react';
import Welcome from './components/Welcome'
import './App.css';
import {Route} from 'react-router-dom'
import NewUser from './components/NewUser'
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Welcome} />
      <Route exact path='/newuser' component={NewUser}/>
      <Route exact path='/users' />
      <Route exact path='/home' component={Home}/>
    </div>
  );
}

export default App;
