import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
	return (
		<div>
			<h1>A Better You</h1>
			<h2>You've survived to a new decade. It's time to make a new you.</h2>
			<Link to='/newuser'>
				<button>Create a User</button>
			</Link>
			<Link to='/users'>
				<button>Users</button>
			</Link>
		</div>
	);
};
export default Welcome;
