import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../actions/auth'

const initialState = {
    user_id: 0,
    username: '',
    isLoading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case REGISTER_START:
            return ({
                ...state,
                isLoading: true
            })
        case REGISTER_SUCCESS:
            return ({
                ...state,
                user_id: action.payload.user_id,
                username: action.payload.username,
                isLoading: false
            })
        case REGISTER_FAILURE:
            return ({
                ...state,
                isLoading: false,
                error: action.payload
            })
        case LOGIN_START:
            return ({
                ...state,
                isLoading: true
            })
        case LOGIN_SUCCESS:
            return ({
                ...state,
                user_id: action.payload.user_id,
                username: action.payload.username,
                isLoading: false
            })
        case LOGIN_FAILURE:
            return ({
                ...state,
                isLoading: false,
                error: action.payload
            })
        case LOGOUT:
            console.log('logout')
            return (initialState)
    }
    return state
}

export default reducer