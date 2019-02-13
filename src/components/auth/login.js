import React from 'react';
import superagent from 'superagent';
import { LoginContext } from '../auth/context';

const API = 'https://javascript-401-api.herokuapp.com';

const When = props => {
    return !!props.condition ? props.children : null;
}

class Login extends React.Component {
    handleSubmit = (e, loginMethod) => {
        e.preventDefault();
        superagent.post(`${API}/signin`)
        .auth(this.state.username, this.state.password)
        .then( response => {
            let token = response.text;
            loginMethod(token)
        })
        .catch(console.error)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }



    render() {
        return (
            <LoginContext.Consumer>
                {context => {
                        return (
                            <>
                            <When condition={context.loggedIn}>
                                <button onClick={context.logout}>Logout</button>
                            </When>
                            <When condition={!context.loggedIn}>
                                <form onSubmit={(e) => this.handleSubmit(e, context.login)}>
                                    <input placeholder="username" name="username" onChange={this.handleChange}/>
                                    <input placeholder="password" name="password" onChange={this.handleChange}/>
                                </form>
                                <button type="submit">Login</button>
                            </When>
                            </>
                        );
                    }}
            </LoginContext.Consumer>
        )
    }
}

export default Login;