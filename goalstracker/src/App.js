import React from 'react';
import Welcome from './components/Welcome';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Goals from './components/Goals';
import Register from './components/Register';
import Login from './components/Login'

function App () {
    	return (
			<div className='App'>
				<Route exact path='/' component={Welcome} />
				<Route exact path='/register' component={Register} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/goals' component={Goals} />
			</div>
	);
}

export default App;
