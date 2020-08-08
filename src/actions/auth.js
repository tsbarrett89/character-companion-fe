import axios from 'axios'

export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"
export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const sendRegister = creds => dispatch => {
    dispatch({ type: REGISTER_START })
    axios
        .post('http://localhost:5000/auth/register', creds)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            dispatch({ type: REGISTER_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err.response }))
}

export const sendLogin = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    axios
        .post('http://localhost:5000/auth/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.response }))
}