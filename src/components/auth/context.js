import React from 'react';
import cookie from 'react-cookies';
import querystring from 'querystring';

export const LoginContext = React.createContext();

class LoginProvider extends React.Component {
    constructor(props){
        super(props);

        // const qs = new URLSearchParams(location.search);

        let token = cookie.load('auth') || null;

        this.state = {
            loggedIn: !!token,
            token: token,
            login: this.login,
            logout: this.logout,
          };
        }

    login = (token) => {
        cookie.save('auth', token);
        this.setState({loggedIn: true, token});
    }

    logout = () => {
        cookie.remove('auth');
        this.setState({loggedIn: false});
    }

    render() {
        return (
            <LoginProvider.Provider value={this.state}>
                {this.props.children}
            </LoginProvider.Provider>
        )
    }
}

