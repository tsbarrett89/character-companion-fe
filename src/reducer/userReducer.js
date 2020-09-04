import {
    FETCH_CHARACTERS_START,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAILURE
} from '../actions/users'

import {
    LOGOUT
} from '../actions/auth'

const initialState = {
    characters: [],
    isLoading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CHARACTERS_START:
            return ({
                ...state,
                isLoading: true
            })
        case FETCH_CHARACTERS_SUCCESS:
            return ({
                ...state,
                characters: [...state.characters, action.payload],
                isLoading: false
            })
        case FETCH_CHARACTERS_FAILURE:
            return ({
                ...state,
                isLoading: false,
                error: action.payload
            })
        case LOGOUT:
            return initialState
    }
    return state
}

export default reducer