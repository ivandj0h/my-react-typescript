import React from 'react'

interface IProps {
    name: string;
    age: number
}

let Customer: React.FC<IProps> = ({ name, age }) => {
    return (
        <React.Fragment>
            <h3 className='text-success'>Customer Components</h3>
            <ul className='list-group'>
                <li className='list-group-item'>Name : {name}</li>
                <li className='list-group-item'>Age : {age} Years Old</li>
            </ul>
        </React.Fragment>
    )
}

export default Customer