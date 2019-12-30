// import React, { useState, useEffect } from 'react';
// import { Link, Route } from 'react-router-dom';
// import Home from './Home';

// import { UserContext } from '../contexts/UserContext';

// const NewUser = () => {
// 	const [
// 		user,
// 		setUser,
// 	] = useState({ username: '', password: '', age: '', weight: '', height: '' });
// 	const handleChange = event => {
// 		setUser({ ...user, [event.target.name]: event.target.value });
// 	};
// 	const handleSubmit = event => {
// 		event.preventDefault();
// 		console.log(user.username);
// 		console.log(user.password);
// 	};

// 	console.log(UserContext);
// 	return (
// 		<UserContext.Provider value={user}>
// 			<div>
// 				{console.log(user)}
// 				<h1>Create a New User</h1>
// 				<form onSubmit={event => handleSubmit(event)}>
// 					<label>
// 						Username:*
// 						<input
// 							type='text'
// 							name='username'
// 							value={user.username}
// 							onChange={event => handleChange(event)}
// 							required
// 						/>
// 					</label>
// 					<label>
// 						Password:*
// 						<input
// 							type='password'
// 							name='password'
// 							value={user.password}
// 							onChange={event => handleChange(event)}
// 							required
// 						/>
// 					</label>
// 					<label>
// 						Age:
// 						<input type='number' name='age' value={user.age} onChange={event => handleChange(event)} />
// 					</label>
// 					<label>
// 						Weight(lbs):
// 						<input
// 							type='number'
// 							name='weight'
// 							value={user.weight}
// 							onChange={event => handleChange(event)}
// 						/>
// 					</label>
// 					<label>
// 						Height(Inches):
// 						<input
// 							type='number'
// 							name='height'
// 							value={user.height}
// 							onChange={event => handleChange(event)}
// 						/>
// 					</label>
//                     <button>Submit!</button>
// 				</form>
// 			</div>
// 		</UserContext.Provider>
// 	);
// };
// export default NewUser;
