import React from 'react';
import Welcome from './components/Welcome';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Goal from './components/Goals';
import GoalForm from './components/GoalForm';

function App () {
    	return (
			<div className='App'>
				<Route exact path='/' component={Welcome} />
				<Route exact path='/goals' component={Goal} />
			</div>
	);
}

export default App;
