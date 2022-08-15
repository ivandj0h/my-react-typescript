import React from 'react'

interface IState {
    name: string;
    age: number;
}
interface IProps { }

export const Employee: React.FC<IProps> = () => {
    let [state, setState] = React.useState<IState>({
        name: 'Juna',
        age: 7
    });

    return (
        <React.Fragment>
            <h3 className='text-success'>List Employee</h3>
            <ul className='list-group'>
                <li className='list-group-item'>Name : {state.name}</li>
                <li className='list-group-item'>Age : {state.age} Years Old</li>
            </ul>
        </React.Fragment>
    )
}
