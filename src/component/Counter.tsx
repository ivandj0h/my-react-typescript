import React from 'react';

interface IState {
    count: number;
}
interface IProps { }

let Counter: React.FC<IProps> = () => {

    let [state, setState] = React.useState<IState>({
        count: 0
    })

    let increment = (): void => {
        setState({
            count: state.count + 1
        })
    }

    let decrement = (): void => {
        setState({
            count: state.count - 1
        })
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h1>Counter</h1>
                                <p className='h3 display-3'>{state.count}</p>
                                <button className='btn btn-success m-1' onClick={increment}>+</button>
                                <button className='btn btn-danger m-1' onClick={decrement}>-</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Counter;