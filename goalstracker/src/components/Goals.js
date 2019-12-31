import React, { useState } from 'react';
import styled from 'styled-components'

const Goals = styled.div`
    background: green;
    width: 80%;
    margin: 0 auto;

`  
const Container = styled.div`
    background: grey;
`

const Goal = ({ goal, index, completeGoal, removeGoal }) => {
	return (
		<Goals className='goal' style={{ textDecoration: goal.isCompleted ? 'line-through' : '' }}>
			<h3>{goal.text}</h3>
			Start Date: {goal.startDate}
			<br />
			End Date:{goal.endDate} <br />
			<div>
				<button onClick={() => completeGoal(index)}>Complete</button>
				<button onClick={() => removeGoal(index)}>x</button>
			</div>
		</Goals>
	);
};
const GoalForm = ({ addGoal }) => {
	const [
		value,
		setValue,
	] = useState({ text: '', person: '', startDate: '', endDate: '' });

	const handleSubmit = e => {
        console.log(value)
		e.preventDefault();
		if (!value) return;
		addGoal(value);
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label> Goal:
				<input type='text' name ='text' value={value.text} onChange={e => setValue(e.target.value)} />
			</label>
            <label> Justin
				<input type='radio' name ='person' value={value.person} onChange={e => setValue(e.target.value)} />
			</label>
            <label> My
				<input type='radio' name ='person' value={value.person} onChange={e => setValue(e.target.value)} />
			</label>
            <label> End Date:
				<input type='date' name ='endDate' value={value.endDate} onChange={e => setValue(e.target.value)} />
			</label>
		</form>
	);
};

function Main () {
	const [
		goals,
		setGoals,
	] = useState([
		{
			text        : 'Fix this app',
			isCompleted : false,
			startDate   : Date(Date.now()),
			endDate     : '12/31/19',
		},
	]);
	const addGoal = text => {
		const newGoals = [
			...goals,
			{ text },
		];
		setGoals(newGoals);
	};
	const completeGoal = index => {
		const newGoals = [
			...goals,
		];
		newGoals[index].isCompleted = !newGoals[index].isCompleted;
		setGoals(newGoals);
	};
	const removeGoal = index => {
		const newGoals = [
			...goals,
		];
		newGoals.splice(index, 1);
		setGoals(newGoals);
	};
	return (
		<Container>
			<div>
				{goals.map((goal, index) => (
					<Goal key={index} index={index} goal={goal} completeGoal={completeGoal} removeGoal={removeGoal} />
				))}
				<GoalForm addGoal={addGoal} />
			</div>
		</Container>
	);
}

export default Main;
