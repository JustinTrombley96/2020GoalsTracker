import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
    const [goals, setGoals] = useState([])
	return (
		<div>
            <h1>Goals</h1>
            <h2>Create Goal</h2>
            <form>

            </form>
		</div>
	);
};
export default Home;
