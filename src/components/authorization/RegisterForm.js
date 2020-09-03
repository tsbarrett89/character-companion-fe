import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import './authForm.scss'

import { sendRegister } from '../../actions/auth'

const RegisterForm = () => {
    const { register, handleSubmit, errors } = useForm()
    const dispatch = useDispatch()
    const history = useHistory()

    function submitRegistration(values){
        dispatch(sendRegister(values))
        history.push('/character-list')
    }

    return (
        <form className="authForm" onSubmit={handleSubmit(submitRegistration)}>
            <label htmlFor="username">Username</label>
            <input
                name="username"
                ref={register({ required: true, minLength: 3 })}
            />
            {errors.username && "Required. Must be at least 3 characters long."}
            <label htmlFor="password">Password</label>
            <input
                name="password"
                type="password"
                ref={register({ required: true, minLength: 3 })}
            />
            {errors.password && "Required. Must be at least 3 characters long."}
            <button 
                type="submit"
            >Register</button>
        </form>
    )
}

export default RegisterForm