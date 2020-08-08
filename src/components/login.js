import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'

import { sendLogin } from '../actions/auth'

const LoginForm = () => {
    const { register, handleSubmit, errors, watch } = useForm()
    const dispatch = useDispatch()

    function submitRegistration(values){
        dispatch(sendLogin(values))
    }

    return (
        <form onSubmit={handleSubmit(submitRegistration)}>
            <label>username
                <input
                    name="username"
                    ref={register({ required: true, minLength: 3 })}
                />
            </label>
            {errors.username && "Required. Must be at least 3 characters long."}
            <label>password
                <input
                    name="password"
                    type="password"
                    ref={register({ required: true, minLength: 3 })}
                />
            </label>
            {errors.password && "Required. Must be at least 3 characters long."}
            <button 
                type="submit"
            >Login</button>
        </form>
    )
}

export default LoginForm