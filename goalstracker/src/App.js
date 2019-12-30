import React from 'react';
import Welcome from './components/Welcome'
import './App.css';
import {Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Welcome} />
      <Route exact path='/newuser' />
      <Route exact path='/users' />
    </div>
  );
}

export default App;
