import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MysGoals from './MysGoals';
import JustinsGoals from './JustinsGoals';
import Goal from './Goal';

const Home = () => {
	const [
		goals,
		setGoals,
	] = useState([
		{
			goal      : 'Make this app',
			person    : 'Justin',
			startDate : '12/30/19',
			endDate   : '12/30/19',
			completed : false,
		},
    ]);
    // const handleSubmit = event => {
    //     e.preventDefault()
    //     if (!value) return;
    //     addGoal(value)
    //     setValue('')
    // }
	return (
		<div>
			<div>
            {/* <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Goal:
                    <input type="text" name="goal" value={goals.goal} onChange={event => handleChange(event)} />
                </label>
                <label>
                    My:
                    <input type="radio" name="person" value={goals.my} onChange={event => handleChange(event)} />
                </label>
                <label>
                    Justin:
                    <input type="radio" name="person" value={goals.justin} onChange={event => handleChange(event)} />
                </label>
                <label>
                    Start Date:
                    <input type="date" name="startDate" value={goals.startDate} onChange={event => handleChange(event)} />
                </label>
                <label>
                    End Date:
                    <input type="date" name="endDate" value={goals.endDate} onChange={event => handleChange(event)} />
                </label>
            <button>Create Goal</button>
            </form>  */}
				{goals.map(goal=> (
					<Goal goal={goal.goal} person={goal.person} />
                ))}
			</div>
		</div>
	);
};
export default Home;



