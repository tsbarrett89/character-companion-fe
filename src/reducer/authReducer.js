import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/auth'

const initialState = {
    user_id: 0,
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
                isLoading: false
            })
        case LOGIN_FAILURE:
            return ({
                ...state,
                isLoading: false,
                error: action.payload
            })
    }
    return state
}

export default reducer