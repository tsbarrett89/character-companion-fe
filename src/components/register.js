import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'

import { sendRegister } from '../actions/auth'

const registerForm = () => {
    const { register, handleSubmit, errors, watch } = useForm()
    const dispatch = useDispatch()

    function submitRegistration(values){
        dispatch(sendRegister(values))
    }

    return (
        <form onSubmit={handleSubmit(submitRegistration)}>
            <label>username
                <input
                    name="username"
                    ref={register({ required: true, minLength: 3 })}
                />
                {errors.username && <p>Required. Must be at least 3 characters long.</p>}
            </label>
            <label>
                <input
                    name="password"
                    type="password"
                    ref={register({ required: true, minLength: 3 })}
                />
                {errors.password && <p>Required. Must be at least 3 characters long.</p>}
            </label>
            <button 
                type="submit"
            >Register</button>
        </form>
    )
}

export default registerForm