import React, {Component} from 'react';
import Login from './Container/Login';
import SignUp from './/Container/SignUp'

class NavBar extends Component {
    render() {
        return (
            <div>
                <button>Login</button>
                <button>SignUp</button>
            </div>
        )
    }
}

export default NavBar;