import React, { useState } from 'react'

import './signIn.scss'

import Login from './LoginForm'
import Register from './RegisterForm'

const SignIn = () => {
    const [registered, setRegistered] = useState(true)

    const toggleRegister = () => {
        setRegistered(!registered)
    }

    return (
        <div className="signIn">
            <span className="tabs">
                <div id={registered && "active"} onClick={toggleRegister}>Log In</div>
                <div id={!registered && "active"} onClick={toggleRegister}>Register</div>
            </span>
            {registered ? <Login /> : <Register />}
            {registered ? <p onClick={toggleRegister}>Not yet a user? Register here</p> :
            <p onClick={toggleRegister}>Already registered? Login here</p>}
        </div>
    )
}

export default SignIn