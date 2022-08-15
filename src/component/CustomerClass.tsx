import React from 'react'

interface IState { }
interface IProps {
    name: string;
    age: number;
}

export default class CustomerClass extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)
    }

    render() {

        let { name, age } = this.props;

        return (
            <React.Fragment>
                <h3 className='text-danger'>Customer Class Components</h3>
                <ul className='list-group'>
                    <li className='list-group-item'>Name : {name}</li>
                    <li className='list-group-item'>Age : {age} Years Old</li>
                </ul>
            </React.Fragment>
        )
    }
}