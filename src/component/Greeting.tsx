import React from 'react'

interface IState {
    greeting: string;
}
interface IProps { }

let Greeting: React.FC<IProps> = () => {

    let [state, setState] = React.useState<IState>({
        greeting: 'world'
    })

    let changeWord = (): void => {
        setState({
            greeting: 'Juna'
        })
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h1>Greeting</h1>
                                <p className='h3 display-3'>Hello <strong>{state.greeting}</strong></p>
                                <button className='btn btn-primary' onClick={changeWord}>Change Greeting</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Greeting;