import {
    FETCH_CHARACTERS_START,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAILURE
} from '../actions/users'

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
            console.log(action.payload)
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
    }
    return state
}

export default reducer