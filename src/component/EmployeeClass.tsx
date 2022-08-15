import React from 'react';

interface IState {
    name: string;
    age: number;
}
interface IProps { }

export class EmployeeClass extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            name: 'Juna',
            age: 7
        } as IState;
    }

    render() {
        let { name, age } = this.state;

        return (
            <React.Fragment>
                <h3 className='text-danger'>List Employee Class</h3>
                <ul className='list-group'>
                    <li className='list-group-item'>Name : {name}</li>
                    <li className='list-group-item'>Age : {age} Years Old</li>
                </ul>
            </React.Fragment>
        );
    }
}