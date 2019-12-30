import React from 'react'

const Goal = (props) => {
    return (
        <div>
            {props.goal}
            {props.person}
            {props.startDate}
            {props.endDate}
            {props.completed}
        </div>
    )
}

export default Goal
