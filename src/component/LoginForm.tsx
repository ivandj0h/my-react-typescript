import React from 'react';
import { IUser } from '../interface/IUser';

interface IState {
    user: IUser
}
interface IProps { }

let LoginForm: React.FC<IProps> = () => {
    let [state, setState] = React.useState<IState>({
        user: {
            username: '',
            password: ''
        }
    });

    let updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setState({
            ...state,
            user: {
                ...state.user,
                [e.target.name]: e.target.value
            }
        })
    }

    let loginSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log(state.user);
    }

    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(state.user)}</pre> */}
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header text-center bg-primary text-white">
                                <h1>Login Form</h1>
                            </div>
                            <div className="card-body">
                                <form onSubmit={loginSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            name='username'
                                            value={state.user.username}
                                            onChange={updateInput}
                                            required={true}
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter name"
                                        />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            name='password'
                                            type="password"
                                            value={state.user.password}
                                            onChange={updateInput}
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter password"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginForm;