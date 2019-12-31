import React, { useState } from 'react';

const Goal = ({ goal, index, completeGoal, removeGoal}) => {

    return (
        <div className="goal" style={{ textDecoration: goal.isCompleted ? "line-through" : ""}} >
            {goal.text}
            <div>
                <button onClick={() => completeGoal(index)}>Complete</button>
                <button onClick={() => removeGoal(index)}>x</button>
            </div>
        </div>
    )
    }
const GoalForm = ({addGoal}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addGoal(value)
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
        </form>
    )
}

function Main() {
    const [goals, setGoals] = useState([
        {
            text: "Fix this app",
            isCompleted: false
        }
    ])
    const addGoal = text => {
        const newGoals = [...goals, { text }]
        setGoals(newGoals)

    }
    const completeGoal = index => {
        const newGoals = [...goals]
        newGoals[index].isCompleted = !newGoals[index].isCompleted;
        setGoals(newGoals)
    }
    const removeGoal = index => {
        const newGoals = [...goals]
        newGoals.splice(index, 1)
        setGoals(newGoals)
    }
    return (
        <div>
            <div>
                {goals.map((goal, index) => (
                    <Goal key={index} index={index} goal={goal} completeGoal={completeGoal} removeGoal= {removeGoal} />
                ))}
                <GoalForm addGoal = {addGoal} />
            </div>
        </div>
    )
}

export default Main


