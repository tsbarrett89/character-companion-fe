import React, { useState } from 'react'

import './signIn.scss'

import Login from './LoginForm'
import Register from './RegisterForm'

const SignIn = () => {
    const [registered, setRegistered] = useState(true)

    return (
        <div className="signIn">
            <span className="tabs">
                <div id={registered && "active"}>Log In</div>
                <div id={!registered && "active"}>Register</div>
            </span>
            {registered ? <Login /> : <Register />}
            {registered ? <p onClick={() => setRegistered(!registered)}>Not yet a user? Register here</p> :
            <p onClick={() => setRegistered(!registered)}>Already registered? Login here</p>}
        </div>
    )
}

export default SignIn