import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home'

const NewUser = () => {
	const [
		user,
		setUser,
	] = useState({ username: '', password: '' });
	const handleChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};
	const handleSubmit = event => {
		event.preventDefault();
		setUser({ username: '', password: '', age: '', weight: '', height: '' });
		console.log(user.username);
		console.log(user.password);
	};

	return (
		<div>
			{console.log(user)}
			<h1>Create a New User</h1>
			<form onSubmit={event => handleSubmit(event)}>
				<label>
					Username:*
					<input
						type='text'
						name='username'
						value={user.username}
						onChange={event => handleChange(event)}
						required
					/>
				</label>
				<label>
					Password:*
					<input
						type='password'
						name='password'
						value={user.password}
						onChange={event => handleChange(event)}
						required
					/>
				</label>
				<label>
					Age:
					<input type='number' name='age' value={user.age} onChange={event => handleChange(event)} />
				</label>
				<label>
					Weight(lbs):
					<input type='number' name='weight' value={user.weight} onChange={event => handleChange(event)} />
				</label>
				<label>
					Height(Inches):
					<input type='number' name='height' value={user.height} onChange={event => handleChange(event)} />
				</label>
				<Link to='/home' user={user}>
					<button>Submit!</button>
				</Link>
			</form>
		</div>
	);
};
export default NewUser;
