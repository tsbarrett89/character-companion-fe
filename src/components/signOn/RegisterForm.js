import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { sendRegister } from '../../actions/auth'

const RegisterForm = () => {
    const { register, handleSubmit, errors, watch } = useForm()
    const dispatch = useDispatch()
    const history = useHistory()

    function submitRegistration(values){
        dispatch(sendRegister(values))
        history.push('/character-list')
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
            >Register</button>
        </form>
    )
}

export default RegisterForm