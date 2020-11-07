import {
    FETCH_CHARACTER_START,
    FETCH_CHARACTER_SUCCESS,
    FETCH_CHARACTER_FAILURE
} from '../actions/character'

const initialState = {
    currentCharacter: {},
    isLoading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    return state
}

export default reducer